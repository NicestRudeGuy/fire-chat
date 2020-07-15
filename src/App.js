import React, { useState, useEffect } from 'react';
import { InputLabel, Button, FormControl, Input } from '@material-ui/core/';
import './App.css';
import Message from './Components/Message';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { username: 'vkd', text: 'hello' },
    { username: 'nibber', text: 'haalu' }
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Enter your nick name'));
  }, []);

  /*
    console.log(username);
     console.log(input);
      console.log(messages); */

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  }

  return (
    <div className="App">
      <h1>Fire Chat 🔥</h1>
      <h2>Hello {username} 😁</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}
            aria-describedby="my-helper-text" />
          <Button disabled={!input} type="submit" onClick={sendMessage}
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
