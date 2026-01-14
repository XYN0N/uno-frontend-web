import io from "socket.io-client";

export const socket = io.connect("https://uno-backend-web.onrender.com");

socket.reconnectionAttempts = 3;
