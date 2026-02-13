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
import { Data } from "./data";
import "./index.css";
import {sdat} from "./functions"
import { SettingsPg } from "./settingpg";


import logo from "./logo.svg";
import reactLogo from "./react.svg";

let routes=["/","/pre","/auto","/active1","/inactive1","/active2","/inactive2","/end","/post", "/data"]
let b1=["/", "/pre","/auto", "/inactive1","/inactive2", "/active1", "/end", "/active2","/post","/data"]
let b2=["/", "/pre","/inactive1","/auto","/inactive2", "/active1","/active2","/end", ,"/post","/data"]

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
          <Route path="/data" element={<Data/>}/>
          <Route path="/settings" element={<SettingsPg/>}/>
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
    const navigate=useNavigate();
  const handleclick=()=>{
    navigate ("/settings")
  }
  return ( <button className="navBut" onClick={handleclick}>
          Settings
        </button>)
}

export function Histbut(){
  return (<button className="navBut">
          History
        </button>)
}

export function Next({next}){
const navigate=useNavigate();
const handleclick=()=>{
  const isChecked=sdat.autowin
  if (isChecked){
    navigate(String(b1[next]))
  } else {
    navigate(String(routes[next]))
  }
    
  console.log(sdat)
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
   const isChecked=sdat.autowin
  if (isChecked){
    navigate(String(b2[last]))
  } else {
    navigate(String(routes[last]))
  }
}

  return(
    <button className="navBut sNavBut" onClick={handleclick}>
      &lt;
    </button>
  )
}



