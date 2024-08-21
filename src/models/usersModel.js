const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   userName:{type:String,required:true},
   email:{type:String,unique:true ,required:true},
   password:{type:String,required:true},
   gender:{type:String,required:true},
   playList:[{type:mongoose.Schema.Types.ObjectId,ref:"Playlist",default:[]}]
});
const User = mongoose.model("User",userSchema);
module.exports = User;