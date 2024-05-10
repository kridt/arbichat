// socketService.js
import { io } from "socket.io-client";

// Opret forbindelse til serveren
const socket = io("https://arbichat-server.onrender.com/"); // Erstat med serverens rigtige URL

// Eksportér socket-objektet
export default socket;
