const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
    service: 'Google mail',
    auth: {
        user: 'nwophoke@gmail.com',
        pass: 'nodie123',
    },
});

// Email data
const mailOptions = {
    from: 'nwophoke@gmail.com',
    to: 'nwophokeisrael91.com',
    subject: 'Hello from Nodemailer',
    text: 'This is a test email sent using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});