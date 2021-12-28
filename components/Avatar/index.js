import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({username,logoutOnPress}) {
   const {user,logout}=useMoralis()
    return (
        <Image
        className='rounded-full cursor-pointer bg-black hover:opacity-80'
        src={` https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")
        }.svg`}
        onClick={()=>logoutOnPress && logout()}
        layout='fill'
      />
    )
}

export default Avatar
