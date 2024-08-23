import socketjs from "./socket";

export const websocket = {
    name: "webSocket",
    configureServer(server: any) {
        socketjs(server.httpServer);
    }
}