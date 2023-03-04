import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Memes from './components/memes/Meme'
import AddMeme from "./components/addmeme/AddMeme";
import UpdateMemes from "./components/memes/UpdateMemes";
import UpdatedMeme from "./components/updatedmemes/UpdatedMeme";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/memes" element={<Memes/>}>
          </Route>
          <Route exact path="/add" element={<AddMeme/>}></Route>
          <Route exact path="/update" element={<UpdateMemes/>}></Route>
          <Route exact path="/updated" element={<UpdatedMeme />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
    </div>
  );
}

export default App;