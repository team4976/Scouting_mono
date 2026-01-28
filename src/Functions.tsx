import "./index.css"
import { useState } from "react";
//Variables were tracking
export const vlars = {
  //pregame
  color: false,
  noshow: false,
  teamno: "",
  matchno: "",
  //auto/trans
  autoscore: 0,
  automiss: 0,
  autoclimb: false,
  autocollect: false,
  autodown: false,
  autofailed: false,
  autooutp: false,
  autodepo: false,
  //active
  a1score: 0,
  a1miss: 0,
  a1outp: false,
  a1take: false,
  a2score: 0,
  a2miss: 0 ,
  a2outp: false,
  a2take: false,
  //inactive
  i1def: false,
  i1move: false,
  i1fill: false,
  i2def: false,
  i2move: false,
  i2fill: false,
  //end
  endclimb: 0, //0 = no, 1 = l1, 2 = l2, 3 = l3
  fall: false,
  break: 0,
  recover: 0,
  //post
  fouls: 0,
  yellow: false,
  red: false,
}

let touched = false //to see if the color box had been touched yet
let tog1 = false //toggle for red
let tog2 = false // toggle for blue

//Input Buttons
export function TextBox({vlar, tip}) {
const [text, setText] = useState(vlars[vlar] || '');

const handleChange = (event) => {
  const newText = event.target.value;
  setText(newText);
  vlars[vlar] = newText;
  console.log (vlars[vlar]);
}
  return(
    <input
      type="text"
      placeholder={tip}
      className="inputText"
      value={text}
      onChange={handleChange}
    />
  )
}

export function TeamBox() {
  if (vlars.color == true) {
    tog1 = true
    tog2 = false
  } else if (touched == true) {
    tog1 = false
    tog2 = true
  } else{
    tog1 = false
    tog2 = false
  }
  const [ch1, setch1] = useState(tog2)
  const [ch2, setch2] = useState(tog1)

  const handleCheck1 = () => {
    touched = true
    if (ch1 == false) {
      vlars.color = false
      setch1(true)
      setch2(false)
    } else {
      setch1(false)
      touched = false
    }
  }

  const handleCheck2 = () => {
    touched = true
    if (ch2 == false) {
      vlars.color = true
      setch2(true)
      setch1(false)
    } else {
      vlars.color = false
      setch2(false)
      touched = false
    }
  }
  return(
    <div className="row">
      <input
        type="checkbox"
        className="checkboxB"
        onChange={handleCheck1}
        checked={ch1}
      />
      <div className="checkboxSpacer"/>
      <input
        type="checkbox"
        className="checkboxR"
        checked={ch2}
        onChange={handleCheck2}
      />
    </div>
  )
}

export function CardBox() {
  return(
    <div className="row">
      <input
        type="checkbox"
        className="checkboxY"
      />
      <div className="checkboxSpacer"/>
      <input
        type="checkbox"
        className="checkboxR"
      />
    </div>
  )
}

export function Checkbox() {
  return(
      <input
        type="checkbox"
        className="checkboxG"
      />
  )
}

export function Tally() {
  return(
    <div className="row">
      <button className="tallyButton">
        -
      </button> 
      <div className="counter">
        777
      </div> 
      <button className="tallyButton">
        +
      </button> 
    </div>
  )
}

export function Score() {
  return(
    <div className="row">
      <button className="tallyButton">
        -5
      </button> 
      <button className="tallyButton">
        -
      </button> 
      <div className="counter">
        777
      </div> 
      <button className="tallyButton">
        +
      </button> 
      <button className="tallyButton">
        +5
      </button> 
    </div>
  )
}