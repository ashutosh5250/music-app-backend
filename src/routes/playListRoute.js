const router = require("express").Router();
const authToken = require("../middelwares/verifyAuthToken");
const {createPlaylist,addSongToPlaylist,getPlaylists} = require("../controllers/playlistController")


router.post("/createPlaylist",authToken,createPlaylist);

router.post("/add_songs", authToken,addSongToPlaylist );

router.get("/getPlaylists", authToken, getPlaylists);

module.exports = router;