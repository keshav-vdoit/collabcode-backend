const WebSocket = require("ws");
const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });

const sessions = new Map(); // Store sessions with connected users

wss.on("connection", (ws, req) => {
  console.log("New connection established");

  ws.on("message", (message) => {
    const { sessionId, content } = JSON.parse(message);

    // Store content for the session
    sessions.set(sessionId, content);

    // Broadcast the new content to all clients in the same session
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify({ sessionId, content }));
      }
    });
  });

  ws.on("close", () => console.log("Connection closed"));
});

console.log("WebSocket server is running on ws://localhost:8080");
