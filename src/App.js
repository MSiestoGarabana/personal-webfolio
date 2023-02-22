import React from "react";
import { Button } from "@mui/material";
import SideMenu from "./SideMenu.js";
import Content from "./Content.js";
import "./App.css";

function App() {
  return (
    <div class="h-screen w-full bg-gray-200 text-center">
      <SideMenu />
      <Content />
    </div>
  );
}

export default App;
