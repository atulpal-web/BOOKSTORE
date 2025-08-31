const nodemailer = require("nodemailer");

exports.sendContactMail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Gmail SMTP transporter (ya apna mail service)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // apna Gmail
        pass: process.env.EMAIL_PASS  // Gmail App Password (normal password nahi chalega)
      }
    });

    let mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL, // apna email jaha receive karna hai
      subject: subject,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully ✅" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email ❌" });
  }
};
