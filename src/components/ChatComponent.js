// ChatComponent.js
import React, { useState, useEffect } from "react";
import socket from "../socketService";

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // Modtag beskeder
  useEffect(() => {
    socket.on("receive_message", (message) => {
      setChat((prevChat) => [...prevChat, message]);
    });

    // Ryd op, når komponenten fjernes
    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Send besked
  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("send_message", message);
      setMessage("");
    }
  };

  return (
    <div>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
