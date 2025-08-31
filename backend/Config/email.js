const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,   // tumhara Gmail address
    pass: process.env.EMAIL_PASS    // abhi jo App Password generate kiya hai
  }
});

async function sendMail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,  // jis email pe bhejna hai
      subject: "Test Email",
      text: "Hello! This is a test email using App Password."
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendMail();
