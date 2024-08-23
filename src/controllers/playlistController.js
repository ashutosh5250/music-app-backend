const Playlist = require('../models/playlistModel');


const createPlaylist = async (req, res) => {
    const { name } = req.body;
    try {
        const playlist = new Playlist({
            name,
            user: req.user._id,  
        });
        await playlist.save();
        res.status(201).json(playlist);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const addSongToPlaylist = async (req, res) => {
    const { playlistId, songId } = req.body;
    try {
        const playlist = await Playlist.findById(playlistId);
        if (!playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }
        if (playlist.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        playlist.songs.push(songId);
        await playlist.save();

        res.status(200).json(playlist);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({ user: req.user._id }).populate('songs');
        res.status(200).json(playlists);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

 const getsongInPlaylist = async (req, res) => {
    try {
      const { playlistId } = req.params;
      const playlist = await Playlist.findById(playlistId).populate('songs');
      if (!playlist) {
        return res.status(404).json({ message: 'Playlist not found' });
      }
      res.status(200).json(playlist.songs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
  
  

module.exports ={createPlaylist,addSongToPlaylist,getPlaylists,getsongInPlaylist}