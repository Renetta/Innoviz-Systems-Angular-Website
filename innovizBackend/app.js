const express = require("express");
var app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
var nodemailer = require("nodemailer");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.post("/enquiry", (req, res) => {
  var data = req.body;
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      auth: {
        user: "innovizqatar@gmail.com",
        pass: "2021@Innoviz",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: data.mail,
      to: "renetta92@gmail.com", 
      subject: data.subject + " : " + data.company,
      text: data.message,
      html: "<b>Name: </b>"+ data.fname + " " + data.lname + "<br>" +
            "<b>Company: </b>" + data.company + "<br>" +
            "<b>Email: </b>" + data.mail + "<br>" +
            "<b>Contact Number: " + data.phone + "<br><br>" +
            data.message,
    };
    let resp = false;

    transporter.verify(function (error, success) {
      if (error) {
        res.end("Something went wrong!!!");
      } else {
        res.end("Thank you for reaching us. We will contact you soon.")
      }
    });

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.end("Something went wrong!!!");
        resolve(false); // or use rejcet(false) but then you will have to handle errors
      } else {
        res.end("Thank you for reaching us. We will contact you soon.")
        resolve(true);
      }
    });
  });
});

app.get("/getData", (req, res) => {
  res.json({
    statusCode: "200",
    statusMesage: "i am here",
  });
});

module.exports = app;
