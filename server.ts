import http from "http";
import socketConnection from "./src/lib/sockets/socket.js";
const express = require("express");
const auth = require("../api/auth/index");
const chat = require("../api/chat/index");
// import { handler } from "./build/handler.js";
import { connectDB } from "./src/stores/store.js";

const app = express();

app.use(express.json());
// app.use(handler);
app.use("/api/v1/auth", auth);
app.use("/api/v1/chat", chat);

app.get("/test", async (req: any, res: any) => {
    res.send("he");
});

const server = http.createServer(app);

socketConnection(server);

server.listen(3000, () => {
    console.log("Server running on port 3000");
    connectDB();
});