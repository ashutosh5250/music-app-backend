const router = require("express").Router();
const verifyAuthToken = require("../middelwares/verifyAuthToken");
const {createPlaylist,addSongToPlaylist,getPlaylists} = require("../controllers/playlistController")


router.post("/createPlaylist",verifyAuthToken,createPlaylist);

router.post("/add_songs", verifyAuthToken,addSongToPlaylist );

router.get("/getPlaylists", verifyAuthToken, getPlaylists);

module.exports = router;