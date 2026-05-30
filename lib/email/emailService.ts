import nodemailer from 'nodemailer';

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Beta invite email template
export const betaInviteTemplate = {
  subject: (productName: string) => `🎉 You're Invited to ${productName} Beta!`,
  
  html: (params: {
    name: string;
    productName: string;
    downloadLink?: string;
    discordLink?: string;
    documentationLink?: string;
  }) => `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Beta Invitation</title>
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          max-width: 600px; 
          margin: 0 auto; 
          padding: 20px;
          background-color: #f5f5f5;
        }
        .container {
          background-color: white;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        h1 { 
          color: #667eea; 
          margin: 0 0 10px 0;
          font-size: 28px;
        }
        .subtitle {
          color: #666;
          font-size: 16px;
          margin: 0;
        }
        .content {
          margin: 30px 0;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white !important;
          padding: 14px 32px;
          text-decoration: none;
          border-radius: 8px;
          margin: 10px 5px;
          font-weight: 600;
          text-align: center;
        }
        .button-secondary {
          background: #e0e7ff;
          color: #667eea !important;
        }
        .buttons {
          text-align: center;
          margin: 30px 0;
        }
        .info-box {
          background: #f8f9fa;
          border-left: 4px solid #667eea;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
        }
        .footer {
          text-align: center;
          color: #999;
          font-size: 14px;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin: 8px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">AG</div>
          <h1>🎉 Welcome to the Beta!</h1>
          <p class="subtitle">You're invited to test ${params.productName}</p>
        </div>

        <div class="content">
          <p>Hi ${params.name || 'there'},</p>
          
          <p>Great news! You've been selected to join the exclusive beta program for <strong>${params.productName}</strong>.</p>
          
          <p>We're excited to have you as one of our early testers. Your feedback will be invaluable in shaping the final product.</p>

          <div class="info-box">
            <strong>📦 What's Next:</strong>
            <ul>
              <li>Download the beta version using the link below</li>
              <li>Join our Discord community for support and updates</li>
              <li>Read the documentation to get started</li>
              <li>Test the features and share your feedback</li>
            </ul>
          </div>

          <div class="buttons">
            ${params.downloadLink ? `<a href="${params.downloadLink}" class="button">📥 Download Beta</a>` : ''}
            ${params.discordLink ? `<a href="${params.discordLink}" class="button button-secondary">💬 Join Discord</a>` : ''}
            ${params.documentationLink ? `<a href="${params.documentationLink}" class="button button-secondary">📖 Read Docs</a>` : ''}
          </div>

          <div class="info-box">
            <strong>⚠️ Beta Terms:</strong>
            <ul>
              <li>This is a beta version - expect bugs and incomplete features</li>
              <li>Please report any issues you encounter</li>
              <li>Do not use in production projects</li>
              <li>Your feedback helps us improve the final release</li>
            </ul>
          </div>

          <p>If you have any questions or need help, feel free to reach out on Discord or reply to this email.</p>
          
          <p>Happy testing! 🚀</p>
          
          <p>
            Best regards,<br>
            <strong>Athian Games Team</strong>
          </p>
        </div>

        <div class="footer">
          <p>Athian Games | Unreal Engine Game Development Studio</p>
          <p>You received this email because you signed up for the ${params.productName} beta program.</p>
        </div>
      </div>
    </body>
    </html>
  `,
  
  text: (params: {
    name: string;
    productName: string;
    downloadLink?: string;
    discordLink?: string;
    documentationLink?: string;
  }) => `
Hi ${params.name || 'there'},

Great news! You've been selected to join the exclusive beta program for ${params.productName}.

We're excited to have you as one of our early testers. Your feedback will be invaluable in shaping the final product.

WHAT'S NEXT:
- Download the beta version using the link below
- Join our Discord community for support and updates
- Read the documentation to get started
- Test the features and share your feedback

LINKS:
${params.downloadLink ? `Download Beta: ${params.downloadLink}` : ''}
${params.discordLink ? `Join Discord: ${params.discordLink}` : ''}
${params.documentationLink ? `Read Docs: ${params.documentationLink}` : ''}

BETA TERMS:
- This is a beta version - expect bugs and incomplete features
- Please report any issues you encounter
- Do not use in production projects
- Your feedback helps us improve the final release

If you have any questions or need help, feel free to reach out on Discord or reply to this email.

Happy testing! 🚀

Best regards,
Athian Games Team

---
Athian Games | Unreal Engine Game Development Studio
You received this email because you signed up for the ${params.productName} beta program.
  `,
};

// Send beta invite email
export async function sendBetaInvite(params: {
  to: string;
  name: string;
  productName: string;
  downloadLink?: string;
  discordLink?: string;
  documentationLink?: string;
}) {
  const transporter = createTransporter();
  
  const mailOptions = {
    from: `"Athian Games" <${process.env.SMTP_USER}>`,
    to: params.to,
    subject: betaInviteTemplate.subject(params.productName),
    text: betaInviteTemplate.text(params),
    html: betaInviteTemplate.html(params),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Beta invite sent to ${params.to}: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`❌ Failed to send beta invite to ${params.to}:`, error);
    throw error;
  }
}

// Send bulk beta invites
export async function sendBulkBetaInvites(invites: Array<{
  to: string;
  name: string;
  productName: string;
  downloadLink?: string;
  discordLink?: string;
  documentationLink?: string;
}>) {
  const results = {
    success: [] as string[],
    failed: [] as { email: string; error: string }[],
  };

  for (const invite of invites) {
    try {
      await sendBetaInvite(invite);
      results.success.push(invite.to);
      // Wait 1 second between emails to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      results.failed.push({
        email: invite.to,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }

  return results;
}

// Test email configuration
export async function testEmailConfig() {
  const transporter = createTransporter();
  
  try {
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return { success: true, message: 'Email configuration is valid' };
  } catch (error) {
    console.error('❌ Email configuration error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

