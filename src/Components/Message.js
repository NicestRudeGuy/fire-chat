import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    /*   console.log(username);
      console.log(message.username); */
    return (
        <div ref={ref} className={`message ${isUser && 'messageUser'}`}>
            <Card className={isUser ? 'messageUserCard' : 'messageGuestCard'}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        {!isUser && `${message.username || 'Uknown'}: `}  {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message;
