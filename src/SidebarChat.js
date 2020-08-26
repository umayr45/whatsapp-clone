import React, { useState, useEffect } from 'react';
import {Avatar} from '@material-ui/core';
import './SidebarChat.css';
import db from './firebase';
import { useParams, Link } from 'react-router-dom';

function SidebarChat({addnewChat,id,name}) {
    const [seed,setSeed]=useState("");
    const [messages,setMessages]=useState('')
    useEffect(()=>{
        if (id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>(
                setMessages(snapshot.docs.map((doc)=>doc.data()))
            ))
        }

    },[id])
    useEffect( ()=>{
        setSeed(Math.floor(Math.random() * 100))
    },[]);
    const createChat=()=>{
        const roomName=prompt('Enter name of chat');
        if(roomName){
            
        db.collection('rooms').add({
            name:roomName,
        })

        }
    }
   
    return !addnewChat? (
        <Link to={`/rooms/${id}`}>
            
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}  />
                <div className='sidebarChat__info'>
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>

                </div>
                
            </div>
        </Link>
    )
    :(<div onClick={createChat} className='sidebarChat'>
        <h2>Add new Chat</h2>

    </div>)
}

export default SidebarChat
 