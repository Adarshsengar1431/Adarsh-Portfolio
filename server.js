const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "Adarshsingh.as830@gmail.com",
    pass: "Adarsh2222"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "Adarshsingh.as830@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
// // Load environment variables from .env file
// const nodemailer = require('nodemailer');
// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5001;

// app.use(bodyParser.json());
// app.use(cors());

// // MySQL setup
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('MySQL connected');
// });

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

// app.post('/contact', (req, res) => {
//   const { firstName, lastName, email, phone, address, message } = req.body;
  
//   // Save contact info to MySQL
//   const sql = 'INSERT INTO contacts (firstName, lastName, email, phone, address, message) VALUES (?, ?, ?, ?, ?, ?)';
//   db.query(sql, [firstName, lastName, email, phone, address, message], (err, result) => {
//     if (err) {
//       console.error('Error inserting data into MySQL:', err);
//       return res.status(500).json({ code: 500, message: 'Something went wrong, please try again later' });
//     }

//     // Send email
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: 'recipient@example.com', // Change this to your recipient's email address
//       subject: 'New Contact Form Submission',
//       text: `New message from ${firstName} ${lastName} (${email}):\n\n${message}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//         return res.status(500).json({ code: 500, message: 'Failed to send email' });
//       }
//       res.status(200).json({ code: 200, message: 'Message sent successfully' });
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
