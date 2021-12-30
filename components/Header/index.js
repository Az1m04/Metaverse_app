import React from "react";
import { useMoralis } from "react-moralis";
import Image from "next/image";
// import ME from "../../public/img/azim.jpg";
import Avatar from "../Avatar";
import ChangeUserName from "../ChangeUserName";
import HeaderBg from '../../public/img/headerBg.jpg'

function Header() {
  const { user, logout } = useMoralis();
  return (
    <div className="sticky p-5 z-50 top-0 bg-gradient-to-b from-black to-fuchsia-900  shadow-lg border-pink-500 border-b-4">
    <Image src={HeaderBg}  layout="fill"/>
      <div className="grid grid-cols-5 lg:grid-cols-3 items-end lg:items-center lg:my-10">
      
        <div className="font-bold hidden lg:inline-grid text-xl absolute top-5 left-5">
          <button
            onClick={() => logout()}
            className="text-pink-400 capitalize  hover:text-pink-500 hover:border-pink-500 "
          >
<img width={'50px'} src="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/32/ffffff/external-smartphone-with-logout-option-with-sign-off-arrow-development-tritone-tal-revivo.png" alt='Logout' />  
          </button>
        </div>
        <div className="col-span-4">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <div className="text-left  lg:text-center relative  lg:mt-10 text-pink-500">
            <h1 className="text-4xl ">Welcome to Metaverse Chat App</h1>
            <h2 className="text-5xl font-bold truncate capitalize text-pink-400 lg:mt-2">
              {user.get("username")}
            </h2>
          </div>

          <div>
            <ChangeUserName />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
