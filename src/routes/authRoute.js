const router = require("express").Router();
const {singInSchema,signUpSchema} = require("../validators/userValidator");
const validater = require("../middelwares/validate")
const {signIn,signUp} = require("../controllers/authController")

router.post("/login", validater(singInSchema),signIn);

router.post("/register",validater(signUpSchema),signUp);

module.exports = router;