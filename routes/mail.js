const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    clientId: '',
    clientSecret: '',
  },
});

async function mailMain() {
  const info = await transporter.sendMail({
    from: 'arun1812.ak@gmail.com',
    to: "arun1812.a@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = mailMain