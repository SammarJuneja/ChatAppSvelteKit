import http from "http";
const express = require("express");
import socketConnection from "$lib/sockets/socket";
import { connectDB } from "../stores/store";

const app = express();
const server = http.createServer(app);

socketConnection(server);

server.listen(4000, () => {
    console.log("Server running on 4000");
    connectDB();
})