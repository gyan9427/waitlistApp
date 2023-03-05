const mongoose = require('mongoose');

const connectDb = (uri)=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    })
}


module.exports = connectDb;