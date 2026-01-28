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
    <Startbut></Startbut>
       <Setbut></Setbut>
        <Histbut></Histbut>
      <div className="title">
        Pre-Game
      </div>
      <Textbox></Textbox>
      <Textbox></Textbox>
      <div className="spacer2">
        Team Colour
      </div>
      <CheckboxT></CheckboxT>
      <div className="spacer2">
      No Show
      </div>
      <CheckboxG></CheckboxG>
      <div className="title">
        Auto
      </div>
      
    </div>
  );
}

export default App;

export function Startbut(){
  return (<button className="navBut">
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

export function CheckboxG(){
  return(
    <input
    type="checkbox"
    className="checkboxG">
    </input>
  )
}




