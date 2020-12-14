const express = require('express');
const path = require('path');
const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

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


app.listen(3000, () => {
    console.log("Listening on port: 3000");
}) 