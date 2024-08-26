import http from "http";
import socketConnection from "$lib/sockets/socket";
import { connectDB } from "./src/stores/store.js";
const express = require("express");
const auth = require("../api/auth/index");
const chat = require("../api/chat/index");
import { handler as svelteKitHandler} from "./build/handler.js";

const app = express();

app.use(express.json());
app.use(svelteKitHandler)
app.use("/api/v1/auth", auth);
app.use("/api/v1/chat", chat);

app.get("/test", async (req, res) => {
    res.send("he");
});

const server = http.createServer(app);

socketConnection(server);

server.listen(3000, () => {
    console.log("Server running on port 4000");
    connectDB();
});