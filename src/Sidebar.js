import React, { useState, useEffect } from 'react'
import {Avatar, IconButton,} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import Chat from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [rooms,setRooms]= useState([]);
    
    const [{user},dispatch]=useStateValue();
    useEffect(()=>{

        const unsubscribe= db.collection('rooms').onSnapshot(snapshot=>(
            setRooms(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data()

                }
            )))
            )
        );
        return ()=>{
            unsubscribe();
        };
        
    },[])
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <IconButton>
                <Avatar src={user?.photoURL}/>
                </IconButton>
                <div className='sidebar__headerRight'>
                <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <Chat/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>

                </div>
               

            </div>
            
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined/>
                    <input type='text' placeholder='Search or start a chat'/>

                </div>
            </div>
                

    
            <div id='sidebar__chats'>
                <SidebarChat addnewChat/>
                {rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}


            </div>
        </div>
    )
}

export default Sidebar
