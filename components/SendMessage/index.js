import React, { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({endOfMessageRef}) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e?.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages.save({
      message: message,
      user: user.getUsername(),
      ethAddress: user.get("ethAddress"),
    }).then((message)=>{},(err)=>{
        console.log(err.message)
    })
    endOfMessageRef?.current?.scrollIntoView({behaviour:'smooth'})
    setMessage('')
  };
  return (
    <form className="flex w-11/12 max-w-2xl fixed bottom-10 bg-black px-6 py-4 opacity-80 rounded-full shadow-xl border-blue-500 border-4">
      <input
        className="outline-none  flex-grow bg-transparent text-white border-blue-400  placeholder-gray-500 pr-5"
        placeholder={`Enter a message ${user.getUsername()}...`}
        type="text"
        value={message}
        onChange={(e) => setMessage(e?.target?.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500 "
      >
        send
      </button>
    </form>
  );
}

export default SendMessage;
