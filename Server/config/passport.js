const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const user=require('../Models/UserModel');


const options= {

    secretOrKey:process.env.SECRET_KEY
};
options.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();

module.exports=(passport)=>{
    passport.use(
        new jwtStrategy(options,(jwt_payload,done)=>{
            user.findById(jwt_payload.user._id)
            .then(user=>{
                if(user) return done(null,user);
                return done(null,false);
            })
            .catch(err=>done(err,false));
        })
    )
};