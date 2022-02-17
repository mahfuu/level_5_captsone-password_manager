import React from "react"

import { Routes, Route, Link } from "react-router-dom"

import Home from "./screens/Home"
import Register from "./screens/Register"
import Profile from "./screens/Profile"
import Error from "./screens/Error"

function App(){
  return(
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App