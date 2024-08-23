import http from "http";
const express = require("express");
import socketjs from "$lib/socket";

const app = express();
const server = http.createServer(app);

socketjs(server);

server.listen(4000, () => {
    console.log("running on 4000")
})