const User = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userName: user.userName, _id: user._id },
      process.env.PRIVATEKEY,
      { expiresIn: "10d" }
    );

    return res.status(200).send({ token, userName: user.userName, message: "Sign in successfully." });
  } catch (error) {
    console.error("SignIn Error: ", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const signUp = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(403).send({ message: "User with given email already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    let newUser = await new User({
      ...req.body,
      password: hashedPassword,
    }).save();

    return res.status(200).send({ message: "Account created successfully!" });
  } catch (error) {
    console.error("SignUp Error: ", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { signIn, signUp };