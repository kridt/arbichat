// socketService.js
import { io } from "socket.io-client";

// Opret forbindelse til serveren
const socket = io("http://localhost:4000"); // Erstat med serverens rigtige URL

// Eksportér socket-objektet
export default socket;
