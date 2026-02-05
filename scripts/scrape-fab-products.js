/**
 * Fab Marketplace Scraper for Athian Games
 * This script scrapes product data from the Fab marketplace
 * Run with: node scripts/scrape-fab-products.js
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const SELLER_URL = 'https://www.fab.com/sellers/Athian%20Games';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'fab-products');
const PRODUCT_DATA_FILE = path.join(__dirname, 'fab-products-data.json');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(OUTPUT_DIR, filename);
    const file = fs.createWriteStream(filePath);
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`  Downloaded: ${filename}`);
        resolve(filePath);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file on error
      console.error(`  Failed to download: ${filename}`, err.message);
      resolve(null);
    });
  });
}

async function scrapeProducts() {
  console.log('Starting Fab marketplace scraper...\n');
  console.log('Launching browser...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set a realistic user agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  try {
    console.log(`Navigating to: ${SELLER_URL}\n`);
    await page.goto(SELLER_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Wait for products to load
    await page.waitForSelector('a[href*="/listings/"]', { timeout: 30000 }).catch(() => {
      console.log('Waiting for alternative selector...');
    });

    // Give page time to fully render
    await new Promise(resolve => setTimeout(resolve, 3000));
    await autoScroll(page);

    // Get all product links
    let productLinks = await getListingUrlsFromPage(page);

    if (productLinks.length === 0) {
      const debugHtmlPath = path.join(__dirname, 'fab-seller-debug.html');
      const debugPngPath = path.join(__dirname, 'fab-seller-debug.png');
      fs.writeFileSync(debugHtmlPath, await page.content());
      await page.screenshot({ path: debugPngPath, fullPage: true });
      console.log(`Saved debug output: ${debugHtmlPath}`);
      console.log(`Saved debug screenshot: ${debugPngPath}`);
    }
    
    console.log(`Found ${productLinks.length} products\n`);
    
    const products = [];
    
    for (let i = 0; i < productLinks.length; i++) {
      const productUrl = productLinks[i];
      console.log(`\n[${i + 1}/${productLinks.length}] Scraping: ${productUrl}`);
      
      try {
        await page.goto(productUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
        await page.waitForSelector('h1', { timeout: 15000 }).catch(() => {});
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const productData = await page.evaluate(() => {
          // Get product name
          const nameEl = document.querySelector('h1');
          const name = nameEl ? nameEl.innerText.trim() : '';
          
          // Get description - look for the main content area
          let description = '';
          const allParagraphs = document.querySelectorAll('p');
          allParagraphs.forEach(p => {
            const text = p.innerText.trim();
            if (text.length > 100 && !description) {
              description = text;
            } else if (text.length > description.length && text.length < 2000) {
              description = text;
            }
          });
          
          // Also try to get description from meta or specific sections
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc && metaDesc.content && metaDesc.content.length > description.length) {
            description = metaDesc.content;
          }
          
          // Get all images - look for high quality product images
          const images = [];
          const imgElements = document.querySelectorAll('img');
          imgElements.forEach(img => {
            const src = img.src || img.getAttribute('src');
            if (src && !images.includes(src)) {
              // Filter for product-like images (larger than icons)
              const width = img.naturalWidth || img.width || 0;
              const height = img.naturalHeight || img.height || 0;
              if ((width > 100 || height > 100) && 
                  !src.includes('avatar') && 
                  !src.includes('icon') &&
                  !src.includes('logo') &&
                  (src.includes('cdn') || src.includes('fab') || src.includes('epic') || src.includes('unrealengine'))) {
                images.push(src);
              }
            }
          });
          
          // Also look for background images in divs
          const divs = document.querySelectorAll('div[style*="background-image"]');
          divs.forEach(div => {
            const style = div.getAttribute('style');
            const match = style.match(/url\(['"]?([^'"]+)['"]?\)/);
            if (match && match[1] && !images.includes(match[1])) {
              images.push(match[1]);
            }
          });
          
          // Get price - look for dollar amounts
          let price = '';
          const allText = document.body.innerText;
          const priceMatch = allText.match(/\$[\d,]+\.?\d*/);
          if (priceMatch) {
            price = priceMatch[0];
          }
          
          // Get features/technical details from lists
          const features = [];
          const listItems = document.querySelectorAll('li');
          listItems.forEach(el => {
            const text = el.innerText.trim();
            if (text && text.length > 10 && text.length < 300 && !text.includes('©')) {
              features.push(text);
            }
          });
          
          // Get unique features
          const uniqueFeatures = [...new Set(features)];
          
          // Get category/tags
          const tags = [];
          const tagEls = document.querySelectorAll('a[href*="category"], a[href*="tag"], span[class*="tag"], span[class*="badge"]');
          tagEls.forEach(el => {
            const text = el.innerText.trim();
            if (text && text.length < 50) {
              tags.push(text);
            }
          });
          
          // Get engine versions
          const engineVersions = [];
          if (allText.includes('5.0') || allText.includes('5.1') || allText.includes('5.2') || allText.includes('5.3') || allText.includes('5.4') || allText.includes('UE5') || allText.includes('Unreal Engine 5')) {
            engineVersions.push('UE 5.0+');
          }
          if (allText.includes('4.27') || allText.includes('4.26') || allText.includes('UE4') || allText.includes('Unreal Engine 4')) {
            engineVersions.push('UE 4.27');
          }
          
          return {
            name,
            description,
            images,
            price,
            features: uniqueFeatures.slice(0, 15),
            tags: [...new Set(tags)],
            engineVersions,
            url: window.location.href
          };
        });
        
        // Download thumbnail and screenshots
        if (productData.images.length > 0) {
          const slug = productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
          
          // Download thumbnail (first image)
          const thumbFilename = `${slug}_thumb.jpg`;
          await downloadImage(productData.images[0], thumbFilename);
          productData.thumbnailLocal = `/images/fab-products/${thumbFilename}`;
          
          // Download additional screenshots (up to 5)
          productData.screenshotsLocal = [];
          for (let j = 1; j < Math.min(productData.images.length, 6); j++) {
            const ssFilename = `${slug}_screenshot${j}.jpg`;
            const result = await downloadImage(productData.images[j], ssFilename);
            if (result) {
              productData.screenshotsLocal.push(`/images/fab-products/${ssFilename}`);
            }
          }
        }
        
        products.push(productData);
        console.log(`  Name: ${productData.name}`);
        console.log(`  Images found: ${productData.images.length}`);
        
      } catch (err) {
        console.error(`  Error scraping product: ${err.message}`);
      }
    }
    
    // Save product data to JSON
    fs.writeFileSync(PRODUCT_DATA_FILE, JSON.stringify(products, null, 2));
    console.log(`\n\nProduct data saved to: ${PRODUCT_DATA_FILE}`);
    console.log(`Images saved to: ${OUTPUT_DIR}`);
    
    // Generate TypeScript code for productData.ts
    generateProductDataCode(products);
    
  } catch (err) {
    console.error('Scraping error:', err);
  } finally {
    await browser.close();
    console.log('\nBrowser closed. Scraping complete!');
  }
}

function generateProductDataCode(products) {
  const outputPath = path.join(__dirname, 'generated-product-data.ts');
  
  let code = '// Generated product data from Fab marketplace\n';
  code += '// Add these to your productData.ts file\n\n';
  
  products.forEach((product, index) => {
    const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const id = (14 + index).toString(); // Start from ID 14 to avoid conflicts
    
    code += `  "${slug}": {\n`;
    code += `    id: "${id}",\n`;
    code += `    slug: "${slug}",\n`;
    code += `    name: "${product.name.replace(/"/g, '\\"')}",\n`;
    code += `    topText: "${product.name.replace(/"/g, '\\"')}",\n`;
    code += `    bottomText: "${(product.description || '').substring(0, 150).replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n`;
    code += `    summary: "${(product.description || '').substring(0, 200).replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n`;
    code += `    description: \`${(product.description || '').replace(/`/g, "'")}\`,\n`;
    code += `    category: "vfx",\n`;
    code += `    engineVersions: ${JSON.stringify(product.engineVersions.length > 0 ? product.engineVersions : ['UE 5.0+'])},\n`;
    code += `    externalUrl: "${product.url}",\n`;
    code += `    thumbnail: "${product.thumbnailLocal || '/images/placeholder.jpg'}",\n`;
    code += `    features: [\n`;
    
    product.features.slice(0, 5).forEach(feature => {
      code += `      {\n`;
      code += `        title: "${feature.substring(0, 50).replace(/"/g, '\\"')}",\n`;
      code += `        description: "${feature.replace(/"/g, '\\"').replace(/\n/g, ' ')}",\n`;
      code += `        image: "${product.thumbnailLocal || '/images/placeholder.jpg'}"\n`;
      code += `      },\n`;
    });
    
    code += `    ]\n`;
    code += `  },\n\n`;
  });
  
  fs.writeFileSync(outputPath, code);
  console.log(`\nGenerated TypeScript code saved to: ${outputPath}`);
}

// Run the scraper
scrapeProducts();

async function getListingUrlsFromPage(page) {
  const domLinks = await page.$$eval('a[href*="/listings/"]', anchors => {
    const links = anchors.map(a => a.href).filter(Boolean);
    return Array.from(new Set(links));
  }).catch(() => []);

  if (domLinks.length > 0) {
    return domLinks;
  }

  const nextData = await page.evaluate(() => {
    const el = document.querySelector('#__NEXT_DATA__');
    if (!el || !el.textContent) return null;
    try {
      return JSON.parse(el.textContent);
    } catch (err) {
      return null;
    }
  });

  return extractListingUrlsFromNextData(nextData);
}

function extractListingUrlsFromNextData(nextData) {
  if (!nextData) return [];
  const jsonString = JSON.stringify(nextData);
  const ids = new Set();

  for (const match of jsonString.matchAll(/\/listings\/([a-f0-9-]{36})/gi)) {
    ids.add(match[1].toLowerCase());
  }

  for (const match of jsonString.matchAll(/"listingId"\s*:\s*"([a-f0-9-]{36})"/gi)) {
    ids.add(match[1].toLowerCase());
  }

  return Array.from(ids).map(id => `https://www.fab.com/listings/${id}`);
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 800;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 300);
    });
  });
}
