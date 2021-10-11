const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    res.status(status).json({message: error.message, data: error.data});
    console.log(error);
});

mongoose.connect('mongodb://appdev:dev@localhost:27017/payroll?authSource=payroll', {useNewUrlParser: true, useUnifiedTopology: true})
//mongoose.connect(process.env.MONGODB_PAYROLL_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result=> {
    console.log('Database Connected');
    app.listen();
})
.catch(err=>console.log(err));