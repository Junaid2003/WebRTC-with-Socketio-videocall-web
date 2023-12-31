import logo from './logo.svg';
import './App.css';
import React from 'react';
import{BrowserRouter, Route, Routes} from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<CreateRoom />} />
            <Route path="/room/:roomID" element={<Room />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
