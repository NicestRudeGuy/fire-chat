import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

function Message({ username, message }) {
    const isUser = username === message.username;
    /*   console.log(username);
      console.log(message.username); */
    return (
        <div className={`message ${isUser && 'messageUser'}`}>
            <Card className={isUser ? 'messageUserCard' : 'messageGuestCard'}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        {message.username} : {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message;
