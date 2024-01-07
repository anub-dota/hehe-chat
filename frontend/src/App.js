import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Signin from "./pages/signinpage";
import Chats from "./pages/chatspage";
import Avatar from "./components/setAvatar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/" element={<Chats />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </BrowserRouter>
  );
}
