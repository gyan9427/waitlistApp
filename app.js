const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')
require('dotenv').config();

const connectdb = require('./db/connectDB')

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

const connect =async ()=>{
    try{
        await connectdb(process.env.mongo_uri)
        app.listen(8000,()=>{
            console.log('listening to PORT: 8000....')
        }) 
    }catch (error){
        console.log(error)
    }
}
connect();