const { json } = require('body-parser');
const User=require('../models/user');

exports.getUsers=(req,res,next)=>{
    User.findAll()
    .then(users=>{
        res.json(users);
    })
    .catch(err=>console.log(err));
}

exports.getIndex=(req,res,next)=>{
    res.json('start page');
}

exports.postAddUser=(req,res,next)=>{
const name=req.body.name;
const phone=req.body.phone;
const email=req.body.email;
console.log('this is',name,phone,email);
User.create({
    name:name,
    phone:phone,
    email:email
})
.then(res=>{
    console.log('created user')
    // res.redirect('/users');
})
.catch(err=>console.log(err))
} 

