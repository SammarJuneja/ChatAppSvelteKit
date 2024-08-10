import { createServer } from "http";
import app from "../app"
const socketServer = "$lib/socket.ts"

const server = createServer(app);