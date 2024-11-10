import React from "react";
import CodeRoom from "./CodeRoom";
import ChatRoom from "./ChatRoom";

const RealTime = () => {
  return (
    <div className="grid grid-cols-3 gap-10">
      <CodeRoom />

      <ChatRoom />
    </div>
  );
};

export default RealTime;
