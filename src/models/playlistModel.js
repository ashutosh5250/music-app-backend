const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const playListSchema = new mongoose.Schema({
	name: { type: String, required: true },
	user: { type: ObjectId, ref: "user", required: true },
	songs: [{type:ObjectId,ref:"Song"}],
	img: { type: String },
   createdAt:{
      type:Date,
      default:Date.now()
   }
});

const PlayList = mongoose.model("playList", playListSchema);

module.exports = PlayList;