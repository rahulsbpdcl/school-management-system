const User=require('../models/user');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const { request } = require('express');

exports.login=async(req,res,next) => {
    try{
        const {userId, password}  = req.body;

        const existingUser = await User.findOne({userId: userId});

        if(existingUser.userId!==userId){
            const  error = new Error('Incorrect User ID or Password!');
            error.statusCode = 403;
            throw error;
        }

        const passwordMatch= await bcrypt.compare(password, existingUser.password);

        if(!passwordMatch){
            const  error = new Error('Incorrect User ID or Password!');
            error.statusCode = 403;
            throw error;
        }

        if(existingUser.status!=='active'){
            const  error = new Error('Inactive Account');
            error.statusCode = 403;
            throw error;
        }

        const token=jwt.sign({userId: existingUser.userId, role: existingUser.role, status: existingUser.status }, 
            process.env.JWT_SIGNATURE, 
            {expiresIn: '1h'}
            );

        res.status(201).json({token: token, userType: existingUser.role });
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
       next(err);
    }
}

exports.createUser = async (req,res,next) => {
    
    try{
        const password=await bcrypt.hash(req.body.password, Number(process.env.SALT) );

        const user=new User({
            userId: request.body.userId,
            password: password,
            role: req.body.role,
            status: 'active'

        });


        await user.save();

        res.status(201).json({message: 'User created successfully!'});
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
       next(err);
    }
}
