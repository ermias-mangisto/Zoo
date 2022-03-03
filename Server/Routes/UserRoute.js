const UserRouter=require('express').Router()
const {register,login} = require('../Controllers/UserController')
UserRouter.post('/',register)
UserRouter.post('/login',login)

module.exports=UserRouter;
