const router = require("express").Router();
const validater = require("../middelwares/validate");
const songSchema = require("../validators/sondValidator");
const {getSongs,addSongs} = require("../controllers/songController")

router.get("/getSong",getSongs);
router.post("/addSong",validater(songSchema),addSongs);
 
module.exports = router;