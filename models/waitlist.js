const mongoose = require('mongoose');
const mongooseSeq = require('mongoose-sequence');
const AutoIncrement = mongooseSeq(mongoose);

const wishlistSchema = new mongoose.Schema({
    email:{
        required:true,
        type: String
    },
    position:{
        type: Number
    }
})

wishlistSchema.plugin(AutoIncrement,{inc_field:'position'});

module.exports = mongoose.model('Wishlist',wishlistSchema);
