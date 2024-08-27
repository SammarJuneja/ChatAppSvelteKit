import ioClient from "socket.io-client";

const socket = ioClient("http://localhost:4000");
const io = socket;

module.exports  = socket;