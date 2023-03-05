const mongoose = require('mongoose');
const mongooseSeq = require('mongoose-sequence');
const Inc = mongooseSeq.Inc;
const AutoIncrement = Inc(mongoose);

const wishlistSchema = new mongoose.Schema({
    email:{
        required:true,
        type: string
    },
    position:{
        type: Number
    }
})

wishlistSchema.plugin(AutoIncrement,{inc_field:'position'});

module.exports = mongoose.model('Wishlist',wishlistSchema);
