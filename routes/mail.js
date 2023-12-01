const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'mdnassaar4@gmail.com',
    pass: 'dtdzodybmhzlfjsx'
  },
});

async function mailMain(mailID,message) {
  const info = await transporter.sendMail({
    from: 'mdnassaar4@gmail.com',
    to: mailID,
    subject: "Hello ✔",
    text: message
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = mailMain