const { socketConnection } = require("./lib/sockets/socket");
const http = require("http");
const express = require("express");
const auth = require("../api/auth/index");
const chat = require("../api/chat/index");
const { handler } = require("./build/handler.js");
const { connectDB } = require("./stores/store");

const app = express();

app.use(express.json());
app.use(handler);
app.use("/api/v1/auth", auth);
app.use("/api/v1/chat", chat);

app.get("/test", async (req, res) => {
    res.send("he");
});

const server = http.createServer(app);

socketConnection(server);

server.listen(3000, () => {
    console.log("Server running on port 3000");
    connectDB();
});