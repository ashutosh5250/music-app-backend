const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoute");
const songRouter = require("./routes/songRoute");
const playlistRouter = require("./routes/playListRoute");
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("MongoDB connected"))
.catch((e)=>console.log('MongoDB connection error:', e))

app.use(helmet())
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/song", songRouter);
app.use("/playlists", playlistRouter)
app.listen(PORT,()=>{
   console.log("server is connect to PORT",PORT)
})