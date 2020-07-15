import React, { useState, useEffect } from 'react';
import { InputLabel, Button, FormControl, Input } from '@material-ui/core/';
import './App.css';
import Message from './Components/Message';
import db from './Config/Firebase';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, []);

  useEffect(() => {
    setUsername(prompt('Enter your nick name'));
  }, []);
  /* 
    console.log(messages); */
  /*
    console.log(username);
     console.log(input);
     */

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>Fire Chat <span aria-label="fire" role="img">🔥</span></h1>
      <h2>Hello {username} <span aria-label="smile" role="img">😁</span> </h2>
      <form>
        <FormControl>
          <InputLabel className="inp">Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}
            aria-describedby="my-helper-text" />
          <Button className="butt" disabled={!input} type="submit" onClick={sendMessage}
            variant="contained" color="primary">Send Msg</Button>
        </FormControl>
      </form>
      {
        messages.map(message => (
          <Message username={username} message={message} />
          /* <p key={id}>{message}</p> */
        ))
      }
    </div>
  );
}

export default App;
