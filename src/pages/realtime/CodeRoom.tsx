import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom"; // React Router Hook
import Editor from "@monaco-editor/react";
import { CircleCheck, Copy } from "lucide-react";
import Avatar from "react-avatar";
import debounce from "lodash/debounce";
import { v4 as uuidv4 } from "uuid";

const WebSocketURL = import.meta.env.PROD
  ? "wss://collabcode-backend-production.up.railway.app"
  : "ws://localhost:8080";

const newUserId = uuidv4().slice(0, 8);

const CodeRoom = () => {
  const { id: sessionId } = useParams(); // Extract search params from URL
  const [activeUsers, setActiveUsers] = useState([]);
  // check if its production or development
  const url = import.meta.env.PROD
    ? "https://colabcode.netlify.app"
    : "http://localhost:5173" + useLocation().pathname;

  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [copyButtonText, setCopyButtonText] = useState("Copy Code");
  const socketRef = useRef(null); // Store WebSocket connection

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = new WebSocket(WebSocketURL);
    socketRef.current = socket;

    socketRef.current.onopen = () => {
      console.log("Connected to WebSocket server");

      // Ensure the connection is open before sending
      if (socketRef.current.readyState === WebSocket.OPEN) {
        // Send a message to the server after the connection is open
        socketRef.current.send(
          JSON.stringify({
            type: "newConnection",
            id: sessionId,
            userId: newUserId,
          })
        );
      }
    };

    socket.onmessage = (event) => {
      const { content: newContent, users } = JSON.parse(event.data);
      setContent(newContent); // Update content when message is received
      setActiveUsers(users);
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket connection closed.");
    };
  }, []);

  // Set up beforeunload warning
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "You have unsaved changes. Are you sure you want to leave?";
      event.returnValue = message; // For most modern browsers
      return message; // For some older browsers (e.g., Firefox)
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleChange = (e) => {
    setContent(e);
    sendText(e);
  };

  const sendText = useCallback(
    debounce(async (text) => {
      // Broadcast the content to other users in the same session
      if (
        socketRef.current &&
        socketRef.current.readyState === WebSocket.OPEN
      ) {
        socketRef.current.send(
          JSON.stringify({ id: sessionId, type: "text", content: text })
        );
      }
    }, 1000),
    []
  );

  const handleLangChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);

    setCopyButtonText("Copied");

    setTimeout(() => {
      setCopyButtonText("Copy Url");
    }, 1000);
  };

  return (
    <div className="bg-white col-span-2 p-4">
      <div className="">
        <div className="flex gap-3">
          {/* tools or users will be here  */}

          {/* editor */}
          <div className="w-full h-[calc(100vh-200px)]">
            <div className="flex items-center justify-between">
              {/* active users */}
              <div className=" flex items-center">
                <h4 className="text-foreground">Users </h4>
                {activeUsers?.slice(0, 3)?.map((user) => (
                  <Avatar
                    key={user}
                    name={user}
                    className=" hover:animate-pulse cursor-pointer"
                    title={user}
                    round={true}
                    size="25"
                    maxInitials={1}
                  />
                ))}
              </div>
              <div className="flex items-center">
                <h3>Other Options to be added</h3>

                <button
                  className={`p-1.5 text-sm font-semibold flex items-center justify-center text-center gap-2  transition rounded m-3 ${
                    copyButtonText === "Copied"
                      ? "bg-green-600"
                      : "text-primary bg-white border border-primary hover:bg-primary hover:text-white"
                  }`}
                  onClick={handleCopy}
                >
                  {copyButtonText}{" "}
                  {copyButtonText === "Copied" ? (
                    <CircleCheck className="size-3" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
                <button
                  className={`p-1.5 text-sm font-semibold flex items-center justify-center text-center gap-2  transition rounded m-3 ${
                    copyButtonText === "Copied"
                      ? "bg-green-600"
                      : "text-primary bg-white border border-primary hover:bg-primary hover:text-white"
                  }`}
                  onClick={handleCopy}
                >
                  {copyButtonText}{" "}
                  {copyButtonText === "Copied" ? (
                    <CircleCheck className="size-3" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
                <select
                  name=""
                  id=""
                  className="p-1.5 rounded border-2"
                  onChange={handleLangChange}
                >
                  <option value="javascript">Javascript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="c++">C++</option>
                </select>
              </div>
            </div>
            <Editor
              height="90%"
              language={language}
              theme="vs-dark"
              value={content}
              onChange={handleChange}
              options={{
                // inlineSuggest: true,
                fontSize: 16,
                formatOnType: true,
                autoClosingBrackets: "always",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeRoom;
