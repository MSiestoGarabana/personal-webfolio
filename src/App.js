import { Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import "./App.css";

function App() {
  return (
    <div id="main" class="flex flex-row">
      <div
        id="header"
        class="absolute flex flex-col justify-between bg-gray-100 items-center h-screen "
      >
        <div
          id="MS"
          class="text-5xl w-full py-10 bg-gray-200 w-full text-center"
        >
          <p>MS</p>
        </div>
        <div id="Container__buttons" class="flex flex-col p-5">
          <Button>HOME</Button>
          <Button>ABOUT</Button>
          <Button>SKILLS</Button>
          <Button>PROJECTS</Button>
          <Button>CONTACT</Button>
        </div>
        <div id="Container__scroll" class="flex flex-row">
          <svg
            fill="none"
            stroke="blue"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            ></path>
          </svg>
          <p>scroll down</p>
        </div>
      </div>
      <div class="h-screen w-full bg-gray-200 text-center">
        <div>Main</div>
        <div>body</div>
      </div>
    </div>
  );
}

export default App;
