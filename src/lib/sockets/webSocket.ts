import socketConnection from "./socket";

export const websocket = {
    name: "webSocket",
    configureServer(server: any) {
        socketConnection(server.httpServer);
    }
}