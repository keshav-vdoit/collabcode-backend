import React from "react";
import CodeRoom from "./CodeRoom";
import ChatRoom from "./ChatRoom";

const SaveAndShare = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <CodeRoom />

      <ChatRoom />
    </div>
  );
};

export default SaveAndShare;
