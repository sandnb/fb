//this is a for the table for users creation for MongoDB 
const mongoose = require("mongoose")
const { Schema } = mongoose;

// deciding what properties should be in the table
const userSchema = new Schema({
  name:{
    type:String,
    required:[true,"Name is Manditory"],
  },
  username:{
   type:String,
   unique:true, //  this creates a new index in the database 'users' thats why we cannot give the duplicate value for the username
   required:[true,"username is Manditory"]
  },
  password:{
   type:String,
   validate:{
    validator:(value)=>value.length>=8,
    message: (data)=>"Password should be atleast 8 Characters!!",
   }
  },
  friendList: {
   type:[String],
  }
})
// api endpoint for signup
userSchema.statics.signup = async(req,res,next) => {
    try {
        const userData = req.body; // here as a 'user' need to submit userName and name and password while signup so we know that user needs to fill the columns of username,name and password so that is why we are geeting the request from user and soting it as userData.
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
// api endpoint for login
userSchema.statics.login = async(req,res,next) => {
  try {
      const {username,password} = req.body; // here as a 'user' need to submit userName and name and password while signup so we know that user needs to fill the columns of username,name and password so that is why we are geeting the request from user and soting it as userData.
      const userData = await UserModel.findOne({username},{_id:0,__v:0});
      console.log(userData);
      if(userData){
        // if user exists match the password now
        if(password == userData.password){
          res.status(200);
            res.send({success:true , message:`${username} logged in successfully`,data:userData});
        }else{
          const err = new Error("Incorrect Password!!!");
          err.status= 401;
         throw(err);
        }
      }else{
        const err = new Error("User doesnt exsist!!!");
        err.status=404;
       throw(err);
      }
  } catch(error){
      console.log(error);
      res.status(error.status || 500);
      res.send({success:false,message:error.message})
  }
}
// api endpopint for addFriend
userSchema.statics.addFriend = async(req,res,next) => {
  try {
      const {username,id,name} = req.body; // here we are getting the details of the username,id,name of the user 
      const data = await UserModel.updateOne({username},{$addToSet:{friendList:id}});
      if(data.modifiedCount){
        res.status(200);
        res.send({success:true,message:`You are now Friends with ${name}`})
      }else{
        const err = new Error("Something went wrong!!!");
        err.status=500;
       throw(err);
      }
  } catch(error){
      console.log(error);
      res.status(error.status || 500);
      res.send({success:false,message:error.message})
  }
}

//api endpoint for removeFriend
userSchema.statics.removeFriend = async(req,res,next) => {
  try {
      const {username,id,name} = req.body; // here we are getting the details of the username,id,name of the user 
      const data = await UserModel.updateOne({username},{$pull:{friendList:id}});
      if(data.modifiedCount){
        res.status(200);
        res.send({success:true,message:`You are no longer Friends with ${name}`})
      }else{
        const err = new Error("Something went wrong!!!");
        err.status=500;
       throw(err);
      }
  } catch(error){
      console.log(error);
      res.status(error.status || 500);
      res.send({success:false,message:error.message})
  }
}
const UserModel = mongoose.model('users',userSchema); //  here we are creating the tabel in the Atlas with the name of table as 'users'

module.exports = UserModel;