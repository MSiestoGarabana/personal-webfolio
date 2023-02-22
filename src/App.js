import React from "react";
import { Button } from "@mui/material";
import SideMenu from "./SideMenu.js";
import "./App.css";

function App() {
  return (
    <div class="h-screen w-full bg-gray-200 text-center">
      <SideMenu />
      <div>Main</div>
      <div>body</div>
    </div>
  );
}

export default App;
