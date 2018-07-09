// server.js
// load the things we need
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const routes = require('./routes/index')
const users = require('./routes/users')
const serverStatus = require('./routes/serverstatus')

const app = express()
// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views/pages'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// user static file folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)
app.use('/users', users)
app.use('/serverstatus', serverStatus)

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(3000);
console.log('3000 is the magic port');
