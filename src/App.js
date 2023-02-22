import React from "react";
import { Button } from "@mui/material";
import NavBar from "./NavBar.js";
import "./App.css";

function App() {
  return (
    <div class="h-screen w-full bg-gray-200 text-center">
      <NavBar />
      <div>Main</div>
      <div>body</div>
    </div>
  );
}

export default App;
