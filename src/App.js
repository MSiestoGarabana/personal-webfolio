import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div id="main" class="flex flex-row mb-4">
      <div id="header" class="h-screen">
        <div id="MS">MS</div>
        <div id="Container__buttons" class="flex flex-col mb-4">
          <Button>HOME</Button>
          <Button>ABOUT</Button>
          <Button>SKILLS</Button>
          <Button>PROJECTS</Button>
          <Button>CONTACT</Button>
        </div>
        <div id="Container__scroll">
          <div>
            <img alt="arrow icon"></img>
            <p>scroll down</p>
          </div>
        </div>
      </div>
      <div> main body</div>
    </div>
  );
}

export default App;
