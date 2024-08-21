const router = require("express").Router();
const authToken = require("../middelwares/verifyAuthToken");
const validater = require("../middelwares/validate")
const playListSchema = require("../validators/playlistValidator");
const {createPlaylist,addSongToPlaylist,getPlaylists} = require("../controllers/playlistController")


router.post("/",authToken,validater(playListSchema),createPlaylist);

router.post("/:id/songs", authToken,addSongToPlaylist );

router.get("/", authToken, getPlaylists);

module.exports = router;