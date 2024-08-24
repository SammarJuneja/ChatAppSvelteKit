import ioClient from "socket.io-client";

const socket = ioClient("http://localhost:4000");
export const io = socket;