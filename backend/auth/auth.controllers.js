const User = require('./auth.dao');
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser = (req, res, next)=>{
    const newUser ={
        name: req.body.name,
        nit: req.body.nit,
        billing_email: req.body.billing_email,
        contac_email: req.body.contac_email,
        phoneNumber: req.body.phoneNumber,
        adress: req.body.adress,
        legal_presentation: req.body.legal,
        identification: req.body.id_number,
        password: req.body.password,
        typeUser: req.body.typeUser

    }

    User.create (newUser,(err,user)=>{
        if(err) return res.status(500).send('Server error')
        const expiresIn = 24*60*60;
        const accessToken = jwt.sign({id:user.id}, 
            SECRET_KEY,{
                expiresIn: expiresIn
            })
    });

    //response

    res.send({ user });
    
}

exports.loginUser = (req, res, next)=>{
    const UserData = {
        contac_email: req.body.contac_email,
        password:req.body.password,
    }
    User.findOne({contac_email: UserData.contac_email},(err, user)=>{
        if(err) return res.status(500).send('Server error!');
        if(!user){
            //email no existe
            res.status(409).send({message: 'Something is wrong'});
        }else{
            const resultPassword = UserData.password;
            if(resultPassword){
                const expiresIn = 24*60*60;
                const accessToken = jet.sign({id: user.id}, SECRET_KEY,{expiresIn: expiresIn});
                res.send({UserData});
            }else{
                //error password 
                res.status(409).send({message: 'Something is wrong'});
            }
        }
    })
}