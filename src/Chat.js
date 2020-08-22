import React from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';

function Chat() {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar/>
                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen ....   </p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton><SearchIcon/></IconButton>
                    <IconButton><AttachFileIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                    

                </div>

            </div>
            <div className='chat__body'>
                <p className='chat__message'>
                    Kya bolte???
                </p>
                <p className='chat__message'>
                    Kya bolte???
                </p>
            </div>
            <div className='chat__footer'>

            </div>
        </div>
    )
}

export default Chat
