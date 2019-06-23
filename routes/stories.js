const express=require('express');
const Router =require('router')
const passport=require('passport');
const {isAuth,isNotAuth}= require('../helpers/authmiddleware.js');
const router = Router()


//route for the public stories
//visible for both authentictaed as well as non authenticated users
router.get('/',(req,res)=>{
    res.render('stories/index');
});

router.get('/add',isAuth,(req,res)=>{
    res.render('stories/add');
});

module.exports=router;