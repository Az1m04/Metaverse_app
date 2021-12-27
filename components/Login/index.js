import React from "react";
import Image from "next/image";
import {useMoralis} from "react-moralis"
import Me from '../../public/img/azim.jpg'

function Login() {
  const {authenticate}=useMoralis()
  return (
    <div className="bg-black relative ">
      <h1>i am Login</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center space-y-4 justify-center w-full" >
      <Image
      className="object-cover rounded-full"
          src={Me} 
           height={200}
           width={200}
        />
        <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"> <h1>Login to Metaverse</h1></button>
      </div>
      <div className="w-full h-screen ">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
