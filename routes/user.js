const express = require('express')
const router = express.Router();



router.get('/login',(req,res)=>{
  res.render('user/login')
})

router.get('/register',(req,res)=>{
  res.render('user/register')
})
router.post('/register',(req,res)=>
{
  // const {email,password} = req.body;
  console.log(req.body)
  res.json('req,body');
})




module.exports = router