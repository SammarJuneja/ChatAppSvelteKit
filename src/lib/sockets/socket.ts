import { Server } from "socket.io";

export default function socketConnection(server: any) {
    const io = new Server(server);

    io.on("connection", (socket) => {
        let username = "";
        socket.emit("join", `${username}`);

        socket.on("message", (message) => {
            io.emit("message", {
                from: username,
                message: message,
                time: new Date().toLocaleString()
            });
        });

        socket.on("chat", (chat) => {
            io.emit("chat", {
                
            });
        });
    });
}