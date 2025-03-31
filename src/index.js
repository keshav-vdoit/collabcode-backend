const WebSocket = require("ws");

// Create the WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// A map to store users by their session id
const usersById = new Map();
const users = new Map();

wss.on("connection", (ws) => {
  console.log("New client connected");

  // Handle incoming messages from clients
  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);

      // Handle new connection
      if (data.type === "newConnection" && data.id) {
        const { id, userId } = data;

        console.log(`User connected with ID: ${id}`);

        // Ensure we have a Set for storing WebSocket connections
        if (!usersById.has(id)) {
          usersById.set(id, new Set());
          users.set(id, new Set());
        }

        // Add this WebSocket client to the Set for the given ID
        usersById.get(id).add(ws);
        users.get(id).add(userId);
        // Acknowledge the connection to the client
        ws.send(
          JSON.stringify({
            type: "connected",
            message: `Welcome, you are connected with ID: ${id}`,
            users: [...users.get(id)],
          })
        );
      }

      // Handle text messages
      else if (data.type === "text" && data.id && data.content) {
        const { id, content: userMessage } = data;
        console.log(users.get(id));
        // Send the message to all users with the same ID
        if (usersById.has(id)) {
          usersById.get(id).forEach((client) => {
            // Send the message only to users with the same ID
            client.send(
              JSON.stringify({
                type: "message",
                content: userMessage,
                users: [...users.get(id)],
              })
            );
          });
        }
      }
    } catch (error) {
      console.error("Error parsing message:", error);
    }
  });

  // Handle client disconnections
  ws.on("close", () => {
    // Remove the WebSocket connection from the user's set
    usersById.forEach((clients, id) => {
      if (clients.has(ws)) {
        clients.delete(ws);

        // If no clients are left for this ID, remove the entry
        if (clients.size === 0) {
          usersById.delete(id);
        }
      }
    });

    console.log("A client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
