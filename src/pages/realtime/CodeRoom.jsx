import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom"; // React Router Hook
import { v4 as uuidv4 } from "uuid";
import Editor from "@monaco-editor/react";
import { CircleCheck, Copy } from "lucide-react";
import Avatar from "react-avatar";

const WebSocketURL = "wss://collabcode-backend-production.up.railway.app";

const CodeRoom = () => {
  const { id: sessionId } = useParams(); // Extract search params from URL
  const [activeUsers, setActiveUsers] = useState([
    "user1",
    "2ser2",
    "3ser3",
    "user4",
    "5ser5",
  ]);
  // check if its production or development
  const url = import.meta.env.PROD
    ? "https://collabcode.netlify.app"
    : "http://localhost:5173" + useLocation().pathname;

  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [copyButtonText, setCopyButtonText] = useState("Copy Url");
  const socketRef = useRef(null); // Store WebSocket connection

  useEffect(() => {
    // Initialize WebSocket connection
    const socket = new WebSocket(WebSocketURL);
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      const { content: newContent } = JSON.parse(event.data);
      setContent(newContent); // Update content when message is received
    };

    return () => {
      socket.close(); // Cleanup WebSocket connection on unmount
    };
  }, []);

  const handleChange = (e) => {
    console.log(e);
    setContent(e);

    // Broadcast the content to other users in the same session
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(
        JSON.stringify({ sessionId, content: newContent })
      );
    }
  };

  const handleLangChange = (e) => {
    console.log(e);
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
    <div className="bg-blue-200 col-span-2 p-4">
      <div className="flex items-center gap-10 m-3 mx-10 justify-between">
        <h1 className="text-text-1">Code Colab</h1>
        <h4 className="text-xl flex items-center">
          Share Session :
          <button
            className={`p-2 px-4 text-base flex items-center min-w-36 text-center gap-2  transition rounded text-white font-semibold m-3 ${
              copyButtonText === "Copied"
                ? "bg-green-600"
                : "bg-primary hover:bg-text-1"
            }`}
            onClick={handleCopy}
          >
            {copyButtonText}{" "}
            {copyButtonText === "Copied" ? (
              <CircleCheck className="size-5" />
            ) : (
              <Copy className="size-5" />
            )}
          </button>
        </h4>
      </div>
      <div className="p-5">
        <div className="flex gap-3">
          {/* tools or users will be here  */}
          <div className=" bg-blue-400  p-2 px-4 flex-col items-center flex">
            <h4 className="text-foreground">Active</h4>
            {activeUsers.map((user) => (
              <Avatar
                name={user}
                className="my-2 hover:animate-pulse cursor-pointer"
                title={user}
                round={true}
                size="40"
                maxInitials={1}
              />
            ))}
          </div>
          {/* editor */}
          <div className="w-full h-[calc(100vh-200px)]">
            <div className="mb-3 flex items-center justify-between">
              <h3>Other Options to be added</h3>
              <select name="" id="" className="p-1" onChange={handleLangChange}>
                <option value="javascript">Javascript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="c++">C++</option>
              </select>
            </div>
            <Editor
              height="90%"
              language={language}
              theme="vs-dark"
              value={content}
              onChange={handleChange}
              options={{
                inlineSuggest: true,
                fontSize: "16px",
                formatOnType: true,
                autoClosingBrackets: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeRoom;
