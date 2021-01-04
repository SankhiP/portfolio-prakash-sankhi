const express = require('express');
const path = require('path');
const sendMail = require('./mail');
const port = process.env.PORT || 3000;
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const log = console.log;
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use('/public', express.static('public'));


app.get('/', (req, res) => {
    res.render('aboutMe.ejs');
})

app.get('/skills', (req, res) => {
    res.render('skills.ejs');

})

app.get('/experiences', (req, res) => {
    res.render('experiences.ejs');
})

app.get('/education', (req, res) => {
    res.render('education.ejs');
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs');
})

app.post('/email', (req, res) => {
    //TODO :
    //send Email here 
    console.log('Data: ', req.body);
    const { name, email, subject, text } = req.body;

    sendMail(name, email, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
        } else {
            res.status({ message: 'Email sent!!!' });
        }

    });
});
















// app.post('/contact', (req, res) => {
//     //console.log('Data:', req.body);
//     const { name, subject, email, text } = req.body;
//     console.log('Data: ', req.body);

//     sendMail(name, email, subject, text, function (err, data) {
//         if (err) {
//             res.status(500).json({ message: 'Internal Error' });
//         } else {
//             res.status({ message: 'Email sent!!!' });
//         }
//     
//     // res.json({ message: 'Message received!!!' })
// });





app.listen(port, () => log("Listining on port : 3000"));


// app.listen(process.env.port || 3000, () => {
//     console.log("Listening on port: 3000");
// }) 