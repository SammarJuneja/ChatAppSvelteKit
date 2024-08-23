import { Server } from "socket.io";

export default function socketjs(server: any) {
    const io = new Server(server);

    io.on("connection", (socket) => {
        let username = `User ${Math.round(Math.random() * 9999)}`
        socket.emit("name", `${username} joined`);

        socket.on("message", (message) => {
            io.emit("message", {
                from: username,
                message: message,
                time: new Date().toLocaleString()
            });
        });
    });
}