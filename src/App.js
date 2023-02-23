import React from "react";
import SideMenu from "./SideMenu.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div class="h-screen w-full bg-gray-100 text-center">
      <SideMenu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
