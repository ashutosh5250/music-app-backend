const Song = require("../models/songsModel");

const getSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    return res.status(200).send(songs);
  } catch (error) {
    console.error("Error fetching songs:", error);
    return res.status(500).send({ message: "Failed to fetch songs", error: error.message });
  }
};

const addSongs = async (req, res) => {
  try {
    const song = new Song(req.body);
    await song.save();
    return res.status(201).send({ data: song, message: "Song created successfully" });
  } catch (error) {
    console.error("Error adding song:", error);
    return res.status(500).send({ message: "Failed to create song", error: error.message });
  }
};

module.exports = { getSongs, addSongs };