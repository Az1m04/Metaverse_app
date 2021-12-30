import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUserName() {
    const {setUserData,isUserUpdating,userError,user}=useMoralis()
    const setUsername=()=>{
        const username=prompt(`Enter your new username (current:${user.getUsername()})`)
        if(!username) return;
        
        setUserData({username})
    }
    return (
        <div className='font-bold text-xl absolute top-5 right-5'>
            
                <button disabled={isUserUpdating} onClick={setUsername} className='bg-pink-600 p-4  text-white rounded hover:bg-pink-500'>
                    Change your username
                </button>
        
        </div>
    )
}

export default ChangeUserName
