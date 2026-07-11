import express from 'express';
import nodemailer from 'nodemailer';

export const contactRouter = express.Router();

// Rate limit: simple in-memory store
const submissions = new Map();
const RATE_LIMIT_MS = 60 * 1000; // 1 per minute per IP

contactRouter.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  if (message.length < 10) {
    return res.status(400).json({ error: 'Message too short.' });
  }

  // Simple rate limiting per IP
  const ip = req.ip;
  const last = submissions.get(ip);
  if (last && Date.now() - last < RATE_LIMIT_MS) {
    return res.status(429).json({ error: 'Please wait before sending another message.' });
  }
  submissions.set(ip, Date.now());

  // If SMTP is configured, send email; otherwise log to console
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: 'mohammadhaider7864@gmail.com',
        replyTo: email,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      console.log(`[Contact] Email sent from ${email}`);
    } catch (err) {
      console.error('[Contact] Email error:', err.message);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }
  } else {
    // Fallback: log to console
    console.log('\n[Contact Form Submission]');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('─'.repeat(40) + '\n');
    console.log('ℹ️  Set SMTP_USER and SMTP_PASS in .env to enable email delivery.\n');
  }

  res.json({ success: true, message: 'Message received. I\'ll get back to you soon.' });
});
