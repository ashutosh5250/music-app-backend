const router = require("express").Router();
const verifyAuthToken = require("../middelwares/verifyAuthToken");
const {createPlaylist,addSongToPlaylist,getPlaylists,getsongInPlaylist} = require("../controllers/playlistController")


router.post("/createPlaylist",verifyAuthToken,createPlaylist);
router.post("/add_songs", verifyAuthToken,addSongToPlaylist );
router.get("/getPlaylists", verifyAuthToken, getPlaylists);
router.get('/:playlistId/songs', verifyAuthToken,getsongInPlaylist)

module.exports = router;