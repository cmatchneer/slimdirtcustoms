"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = function(app) {
    app.post("/api/email", function(req, res) {
        console.log(req.body)


        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
        let message = {
            from: "tester@test.com",
            to: "cmatchneer@yahoo.com",
            subject: "test",
            text: "it works"
        }
        transporter.sendMail(message, function(err, data) {
            if (err) {
                console.log("err", err)
            } else {
                console.log("sent");
            }
        })

    })

}