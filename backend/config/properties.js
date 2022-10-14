const { default: mongoose } = require("mongoose");

module.exports ={
    PORT: process.env.PORT || 3000,
    DB:mongoose.connect("mongodb+srv://userGCG:gallardo12@cluster0.orkrkzu.mongodb.net/Provedores_GCG?retryWrites=true&w=majority") 
}