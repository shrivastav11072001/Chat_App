const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes.js");
const messageRoutes = require("./routes/message.routes.js");
const userRoutes = require("./routes/user.routes.js");

const { connectDB } = require("./config/db.js");
const { app, server } = require("./Socket/Socket.js");

// const app = express(); 
dotenv.config({ path: "./config/config.env" });

app.use(cors());
app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);
app.use("/users", userRoutes);

// const server = createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//   },
// });

// const getReceiverSocketId = (receiverId)=>{
//   return userSocketMap[receiverId];
// }

// const userSocketMap = {};

// io.on("connection", (socket) => {
//   console.log("A user is connected", socket.id);

//   const userId = socket.handshake.query.userId;
//   if (userId) {
//     userSocketMap[userId] = socket.id
//   }

//   io.emit("getOnlineUsers", Object.keys(userSocketMap));
//   socket.on("disconnect", () => {
//     delete userSocketMap[userId];
//     io.emit("getOnlineUser", Object.keys(userSocketMap));
//   });
// });

const PORT = process.env.PORT || 5000;
server.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
 