import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import Search from "./pages/Search/Search";
import MyPosts from "./pages/MyPosts/MyPosts"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed" element={<Search />} />
        <Route path="/myposts" element={<MyPosts />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
