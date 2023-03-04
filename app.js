const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(8000,()=>{
    console.log('listening to PORT: 8000....')
})