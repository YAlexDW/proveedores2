const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex',true);

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    bulling_email:{
        type: String,
        require: true,
        trim: true
    },
    nit:{
        type: Number,
        require: true,
        trim:true
    },
    contac_email:{
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        require: true,
        trim: true
    },
    adress:{
        type: String,
        require: true,
        trim: true
    },
    legal_presentation:{
        type: String,
        require: true,
        trim:true
    },
    indentification:{
        type: Number,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true,
        trim: true
    },
    typeUser:{
        type: Number,
        require: true,
        trim: true
    }

},{
    timestamps: true
});

module.exports = userSchema;