const express = require('express')
const app = express();
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admin')
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./db/connectDB');







//view engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
//static assets
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.use('/user',userRoutes)
app.use('/admin',adminRoutes)

connectDB();


app.listen(3000,()=>{
  
  console.log("server  started  ");
  
})