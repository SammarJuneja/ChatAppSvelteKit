import http from "http";
import socketConnection from "$lib/sockets/socket";
import { connectDB } from "../stores/store";
const express = require("express");
const auth = require("../api/auth/index");
const chat = require("../api/chat/index");

const app = express();

app.use(express.json());
app.use("/api/v1/auth", auth);
app.use("/api/v1/chat", chat);

const server = http.createServer(app);

socketConnection(server);

server.listen(4000, () => {
    console.log("Server running on port 4000");
    connectDB();
});