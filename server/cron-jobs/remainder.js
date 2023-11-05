const cron = require("node-cron");
const nodemailer = require("nodemailer");

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "serviceairlinenotification@gmail.com",
    pass: "kyudslwyqdnunnyw",
  },
});

const userEmails = [
  "siddanth6365@gmail.com",
  "siddanthe.edu@gmail.com",
  "kartikaggarwal2004@gmail.com",
];

// Define your email content
const mailOptions = {
  from: "serviceairlinenotification@gmail.com",
  subject: "Task Reminder",
  text: "Dont forget to complete your task today!",
};

// Schedule the cron job to run twice a day (morning and evening)
// Adjust the cron schedule based on your preferences
// The following example schedules reminders every day at 9 AM and 6 PM
cron.schedule("0 9,18 * * *", () => {
  console.log("Sending reminders...");
  userEmails.forEach((userEmail) => {
    mailOptions.to = userEmail;
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Error sending email to ${userEmail}: ${error.message}`);
      } else {
        console.log(`Email sent to ${userEmail}: ${info.response}`);
      }
    });
  });
});

console.log("Cron job started.");
