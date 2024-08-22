const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const playlistSchema = new mongoose.Schema({
	name: { type: String, required: true },
	user: { type: ObjectId, ref: "User", required: true },
	songs: [{type:ObjectId,ref:"Song"}],
   createdAt:{
      type:Date,
      default:Date.now()
   }
});

const Playlist = mongoose.model("playList", playlistSchema);

module.exports = Playlist;