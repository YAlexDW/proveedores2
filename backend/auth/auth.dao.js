const mongoose= require('mongose');
const authSchema = require('./auth.models');

authSchema.statics={
    create: function(data, cb){
        const user = new this(data);
        user.save(cb);
    },
    login: function(query, cb){
        this.find(query, cb);
    }
}

const authModel =  mongoose.model('Users', authSchema);
module.exports = authModel;