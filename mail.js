const { name } = require('ejs');
require('dotenv').config();
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: process.env.api_key,
        domain: process.env.domain
    }
};


const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = function (name, email, subject, text, cb) {

    const mailOptions = {
        sender: name,
        from: email,
        to: 'sankhi.prakash@gmail.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null);

        } else {
            cb(null, data);

        }
    });


}
// Exporting the sendmail
module.exports = sendMail;
