import React from 'react';
import './App.css';
import { Room } from './Room';

function App() {
  console.log("Function executed");
  return (
    <div >
      <Room roomName= "Bed-Room" iniState={true} iniTemp={20}></Room>
      <Room roomName= "Bath-Room" iniState={false} iniTemp={25}></Room>
      <Room roomName= "Store" iniState={false} iniTemp={30}></Room>
    </div>
  );
}

export default App;
