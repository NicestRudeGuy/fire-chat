import React, { useState, useEffect, useRef } from "react";
import { FormControl, Input, IconButton } from "@material-ui/core/";
import "./App.css";
import Message from "./Components/Message";
import db from "./Config/Firebase";
import firebase from "firebase";
import Flipmove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

const App = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Enter your nick name"));
  }, []);

  /* 
   console.log(messages);
    console.log(username);
    console.log(input); */

  const clear = (event) => {
    event.preventDefault();
    db.collection("messages")
      .get()
      .then((res) => {
        res.forEach((element) => {
          element.ref.delete();
        });
      });
    alert("cleared shit");
  };

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    /*     setMessages([...messages, { username: username, message: input }]); */
    setInput("");
  };

  return (
    <div className="App">
      <img
        src="https://media.giphy.com/media/1lDDbtArVOHPrERDf2/giphy.gif"
        className="symb"
        alt="infinity"
        onDoubleClick={clear}
      />
      <h1>
        Fire Chat
        <span aria-label="fire" role="img">
          🔥
        </span>
      </h1>
      <h3>
        Hello {username}
        <span aria-label="smile" role="img">
          😁
        </span>
      </h3>
      <form className="frm">
        <FormControl className="frmCtrl">
          <Input
            className="inp"
            placeholder="Enter a msg ..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            aria-describedby="my-helper-text"
          />

          <IconButton
            className="butt"
            disabled={!input}
            type="submit"
            onClick={sendMessage}
            variant="contained"
            color="primary"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <Flipmove>

        {messages.map(({ message, id }) => (
          <Message key={id} username={username} message={message} />
        ))}

      </Flipmove>

      <div ref={messagesEndRef} />

    </div>
  );
};

export default App;
