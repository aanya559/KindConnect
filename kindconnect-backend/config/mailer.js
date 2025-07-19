
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const sendConfirmationEmail = async (recipientEmail, name, interest) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"KindConnect" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: 'Volunteer Registration Confirmation',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for registering as a volunteer with KindConnect!</p>
        <p><strong>Interest Area:</strong> ${interest}</p>
        <p>We will reach out to you shortly with more information.</p>
        <br />
        <p>With gratitude,<br />The KindConnect Team 💜</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${recipientEmail}`);
  } catch (error) {
    console.error('Failed to send email:', error.message);
    throw error;
  }
};
