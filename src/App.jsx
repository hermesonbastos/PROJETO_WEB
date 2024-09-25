import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import Search from "./pages/Search/Search";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import UserStorage from "./context/UserContext";
import MyPosts from "./pages/MyPosts/MyPosts"



function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/feed"
            element={
              // <ProtectedRoute>
                <Feed />
              // </ProtectedRoute>
            }
          />
          <Route path="*" element={<Home />} />
          <Route path="/myposts" element={<MyPosts />}/>
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
