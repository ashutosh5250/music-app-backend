const Song = require("../models/songsModel");

const getSongs = async(req,res)=>{
   const songs = await Song.find();
	return res.status(200).send(songs);
}

const addSongs = async(req,res)=>{
	const song = await Song(req.body).save();
	return res.status(201).send({ data: song, message: "Song created successfully" });
}

module.exports = {getSongs,addSongs}