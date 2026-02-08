ww// Quick script to verify all product IDs are unique
import { productDetails } from './lib/products/productData';

const ids = Object.values(productDetails).map(p => p.id);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

console.log('Total products:', ids.length);
console.log('Unique IDs:', new Set(ids).size);

if (duplicates.length > 0) {
  console.error('❌ DUPLICATE IDs FOUND:', [...new Set(duplicates)]);
  process.exit(1);
} else {
  console.log('✅ All product IDs are unique!');
  console.log('Product IDs:', ids.sort((a, b) => parseInt(a) - parseInt(b)));
}
