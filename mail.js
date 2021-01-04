const { name } = require('ejs');
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '9e0d4a1e3f40b05bf121b1955a0ca63f-c50a0e68-61fab6db',
        domain: 'sandbox325ae1c4cb0d4fdeb1ca32a03927214a.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = function (name, email, subject, text, cb) {

    const mailOptions = {
        sender: name,
        from: email,
        to: 'prakash_sankhi@yahoo.com',
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
