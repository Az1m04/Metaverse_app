import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "../SendMessage";
import UserMessage from "../UserMessage";
function Messages() {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);
  const MINS_DURATION=15;
  const { data, loading, error } = useMoralisQuery("Messages", (query) =>
    query?.ascending("createdAt").greaterThan("createdAt",new Date(Date.now()-1000*60*MINS_DURATION)),[],{live:true}
  );
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <div className="space-y-10 p-4">
        {data?.map((message)=> <UserMessage key={message?.id} message={message}/>)}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
      <div ref={endOfMessageRef}  className="text-center text-gray-400 mt-5">
        You are upto date {user.getUsername()}!
      </div>
    </div>
  );
}

export default Messages;
