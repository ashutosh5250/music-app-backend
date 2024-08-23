const router = require("express").Router();
const validater = require("../middelwares/validate");
const songSchema = require("../validators/sondValidator");
const verifyAuthToken = require("../middelwares/verifyAuthToken");
const {getSongs,addSongs} = require("../controllers/songController")

router.get("/getSong",verifyAuthToken,getSongs);
router.post("/addSong",validater(songSchema),addSongs);
 
module.exports = router;