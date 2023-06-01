const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type:String,
    required:[true,"Name is Manditory"],
  },
  username:{
   type:String,
   unique:true,
   required:[true,"username is Manditory"]
  },
  password:{
   type:String,
   required:[true,"password is manditory"],
   validate:{
    validator:(value)=>value.length>=8,
    message: (data)=>"Password should be atleast 8 Characters!!"
   }
  },
  friendList: {
   type:[String],
  }
})

userSchema.statics.signup = async(req,res,next) => {
    try {
        const userData = req.body;
        const data = await UserModel.create(userData);
        console.log(data);
        if(data){
            res.status(201);
            res.send(`user ${userData.username} created successfully!!`);
        }
    } catch(error){
        console.log(error);
        res.status(500);
        res.send({success:false,message:error.message})
    }
}

const UserModal = mongoose.model('users',userSchema)

module.exports = UserModel;