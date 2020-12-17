const express = require('express');
const path = require('path');
const app = express();

const port = process.env.port;

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

app.listen(port);

// app.listen(process.env.port || 3000, () => {
//     console.log("Listening on port: 3000");
// }) 