import React,{useState} from 'react';
import {Message} from './Message.js';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count,setCount] =useState(1)
  let [isMorning,setMorning] =useState(true)
  return (
    <div className={`box ${isMorning? 'dayLight':'dayDark'}`}>
    <h1>GooD {isMorning? 'Morning': 'Night'}</h1>
    <Message counter={count}></Message><br></br>
    <button onClick={()=>setCount(++count)}>Update Counter</button>
    <button onClick={()=>setMorning(!isMorning)}>Update Data</button>
    </div>
  );
}

export default App;
