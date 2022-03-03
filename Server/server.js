const dotenv=require('dotenv');
const path=require('path');
dotenv.config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
const EmployeeRouter=require('./Routes/EmployeeRouter');
const AnimalRouter=require('./Routes/AnimalRouter');
const UserRouter=require('./Routes/UserRoute')
const passport=require('passport');
require('./config/passport')(passport);
require('./DB/DB');
const port=process.env.PORT ;
console.log(port);
app.use(passport.initialize())
app.use('/register',UserRouter);
app.use('/employee',passport.authenticate("jwt",{session:false}),EmployeeRouter);
app.use('/animal',passport.authenticate("jwt",{session:false}),AnimalRouter);
app.listen(port);  