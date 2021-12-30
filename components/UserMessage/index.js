import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "../Avatar";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)


function UserMessage({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message?.get("ethAddress") === user?.get("ethAddress");
  
  return (
    <div
      className={`flex items-end space-x-2 relative ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message?.get("user")} />
      </div>
      <div
        className={`rounded-lg space-x-4 flex   p-3 ${
          isUserMessage
            ? `rounded-br-none bg-pink-300`
            : `rounded-bl-none bg-blue-400`
        }`}
      >
        <p>{message.get("message")}</p>
      </div>
      <div className={`text-[10px] italic text-gray-400 ${isUserMessage && 'order-first pr-1'}`}>
      {dayjs(message.createdAt).fromNow()}
      </div>
      <p
        className={` absolute -bottom-5 text-xs ${
          isUserMessage ? `text-pink-300 ` : `text-blue-400 `
        }`}
      >
        {message.get("user")}
      </p>
    </div>
  );
}

export default UserMessage;
