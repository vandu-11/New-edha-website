import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name,phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
          user: process.env.OUTLOOK_EMAIL,
          pass: process.env.OUTLOOK_APP_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      

    const mailOptions = {
      from: process.env.OUTLOOK_EMAIL,
      to: 'edhadigitalservices@outlook.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message} \nPhone Number: ${phone}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
