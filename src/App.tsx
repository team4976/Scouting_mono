import { APITester } from "./APITester";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom"
import { Homepage } from "./homepage";
import {Pregame} from "./pregame"
import { AutoTrans } from "./autotrans";
import { Active1 } from "./active1";
import { Inactive1 } from "./inactive1";
import { Active2 } from "./active2";
import { Inactive2 } from "./inactive2";
import { Endgame } from "./endgame";
import { Postgame } from "./postgame";
import "./index.css";

import logo from "./logo.svg";
import reactLogo from "./react.svg";

let routes=["/","/pre","/auto","/active1","/inactive1","/active2","/inactive2","/end","/post"]

export function App() {
  return (
    <div className="screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/pre" element={<Pregame/>}/>
          <Route path="/auto" element={<AutoTrans/>}/>
          <Route path="/active1" element={<Active1/>}/>
          <Route path="/inactive1" element={<Inactive1/>}/>
          <Route path="/active2" element={<Active2/>}/>
          <Route path="/inactive2" element={<Inactive2/>}/>
          <Route path="/end" element={<Endgame/>}/>
          <Route path="/post" element={<Postgame/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

export function Startbut(){
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate ("/pre")
  }
  return (<button className="navBut" onClick={handleclick}>
        Start
        </button>)

}

export function Setbut(){
  return ( <button className="navBut">
          Settings
        </button>)
}

export function Histbut(){
  return (<button className="navBut">
          History
        </button>)
}

export function Textbox(){
  return (
    <input
      type="text"
      placeholder="wfaoajsf"
      className="inputText"/>
  )
}

export function CheckboxT(){
  return (
     <div className="row"><input 
      type="checkbox"
      className="checkboxB"/>
      <input
      type="checkbox"
      className="checkboxR"/>
      </div>
)
}

export function CheckboxC(){
  return (
     <div className="row"><input 
      type="checkbox"
      className="checkboxY"/>
      <input
      type="checkbox"
      className="checkboxR"/>
      </div>
)
}

export function CheckboxG(){
  return(
    <input
    type="checkbox"
    className="checkboxG">
    </input>
  )
}

export function Tally(){
  return(
    <div className="row">
     <button className="tallyButton">
      -5
     </button>
      <button className="tallyButton">
      -
     </button>
     <div className="counter"></div>
      <button className="tallyButton">
      +
     </button>
      <button className="tallyButton">
      +5
     </button>
      </div>
  )
}

export function TallyB(){
  return(
    <div className="row">
      <div className="tallyButton">
        -
      </div>
      <button className="counter"></button>
      <div className="tallyButton">
        +
      </div>
    </div>
  )
}

export function Next({next}){
const navigate=useNavigate();
const handleclick=()=>{
  navigate(String(routes[next]))
}

  return(
    <button className="navBut sNavBut" onClick={handleclick}>
      &gt;
    </button>
  )
}

export function Last({last}){
const navigate=useNavigate();
const handleclick=()=>{
  navigate(String(routes[last]))
}

  return(
    <button className="navBut sNavBut" onClick={handleclick}>
      &lt;
    </button>
  )
}



