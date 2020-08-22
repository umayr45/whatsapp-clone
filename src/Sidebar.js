import React from 'react'
import {Avatar, IconButton,} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import Chat from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <IconButton>
                <Avatar/>
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

                <SidebarChat/>
                
                <SidebarChat/>
                
                <SidebarChat/>
                
                <SidebarChat/>

            </div>
        </div>
    )
}

export default Sidebar
