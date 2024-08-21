const router = require("express").Router();
const {singInSchema,signUpSchema} = require("../validators/userValidator");
const validater = require("../middelwares/validate")
const {signIn,signUp} = require("../controllers/authController")

router.post("/signIn", validater(singInSchema),signIn);

router.post("/signUp",validater(signUpSchema),signUp);

module.exports = router;