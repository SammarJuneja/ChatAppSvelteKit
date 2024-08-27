import socketConnection from "./socket";

const websocket = {
    name: "webSocket",
    configureServer(server) {
        socketConnection(server.httpServer);
    }
}

module.exports = websocket;