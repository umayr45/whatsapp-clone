import React, { useState, useEffect } from 'react';
import {Avatar} from '@material-ui/core';
import './SidebarChat.css';
function SidebarChat({addnewChat}) {
    const [seed,setSeed]=useState("");
    useEffect( ()=>{
        setSeed(Math.floor(Math.random() * 100))
    },[]);
    const createChat=()=>{}
   
    return !addnewChat? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  />
            <div className='sidebarChat__info'>
                <h2>okok</h2>
                <p>Last message</p>

            </div>
            
        </div>
    )
    :(<div onClick={createChat} className='sidebarChat'>
        <h2>Add new Chat</h2>

    </div>)
}

export default SidebarChat
 