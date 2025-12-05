import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend(process.env.RESEND_API_KEY);

// Standard Vercel Serverless Function Handler
export default async function handler(req: any, res: any) {
  // 1. Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 2. Get data from the request body
    const { name, email, service, message, phone } = req.body;

    // 3. Get your email from environment variables
    const contactEmail = process.env.CONTACT_EMAIL as string;

    const data = await resend.emails.send({
      from: 'Build50 Contact <onboarding@resend.dev>',
      to: [contactEmail], 
      subject: `New Lead: ${service} - ${name}`,
      html: `
        <h1>New Project Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 4. Send success response (Status 200)
    return res.status(200).json(data);
  } catch (error: any) {
    // 5. Send error response (Status 500)
    return res.status(500).json({ error: error.message });
  }
}