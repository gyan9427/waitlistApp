const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

const waitlistRoute = require('./routes/waitlist');

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',waitlistRoute);

app.listen(8000,()=>{
    console.log('listening to PORT: 8000....')
})