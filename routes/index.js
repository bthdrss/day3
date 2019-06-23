const express=require('express');
const Router =require('router')
const passport=require('passport');
const {isAuth,isNotAuth}= require('../helpers/authmiddleware.js');
const router = Router()


router.get('/',isNotAuth,(req,res)=>{
    res.render('index/welcome');
});

router.get('/dashboard',isAuth,(req,res)=>{
    res.render('index/dashboard');
});
module.exports=router;