const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const userRoutes = require("./routes/user.routes.js");

const { connectDB } = require("./config/db.js");
const { app, server } = require("./Socket/Socket.js");

dotenv.config({ path: "./config/config.env" });

app.use(cors());
app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
  res.send("Hello Backend")
})

app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;
server.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
 