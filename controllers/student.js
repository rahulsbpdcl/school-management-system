const Student = require('../models/student');

exports.createPersonalInformation = async(req, res, next ) => {
    try{
        
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
       next(err);
    }

}

exports.updatePersonalInformation = async(req, res, next ) => {
    try{
        
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
       next(err);
    }
    
}


exports.createAcademicInformation = async(req, res, next ) => {
    try{
        
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
       next(err);
    }

}

exports.updateAcademicInformation = async(req, res, next ) => {
    try{
        
    }
    catch(err){
        if(!err.statusCode){
            err.statusCode=500;
        }
       next(err);
    }
    
}