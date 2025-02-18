import React, { useState } from "react";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const currMess = {
    message:
      "That's awesome. I think our users will really appreciate the improvements.",
    time: "11:46",
    user: "Bonnie Green",
    status: "Delivered",
  };
  return (
    <div className="col-span-1 m-4 rounded-lg border border-primary shadow">
      <ChatBubble data={currMess} />
    </div>
  );
};

const ChatBubble = ({ data }) => {
  const { message, time, user, status } = data;
  return (
    <div className="flex items-start gap-2.5">
      <img
        className="w-8 h-8 rounded-full"
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        alt="Jese image"
      />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {user}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {time}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
          {message}
        </p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {status}
        </span>
      </div>
    </div>
  );
};

export default ChatRoom;
