import { APITester } from "./APITester";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

export function App() {
  return (
    <div className="screen">
      <div className="title">
        Home Page
      </div>
      <button className="navBut">
       Start
      </button>
      <div className="row">
        <button className="navBut">
          Settings
        </button>
      </div>
      <div className="row">
        <button className="navBut">
          History
        </button>
      </div>
      <div className="title">
        Pre-Game
      </div>
    </div>
  );
}

export default App;
