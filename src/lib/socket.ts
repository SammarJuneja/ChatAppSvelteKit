import { Server } from "socket.io";
import http from "http";

const server = http.createServer();

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    socket.on("message", (data) => {

    });
});