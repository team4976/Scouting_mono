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
  const [ch1, setBool1] = useState(false);
  const [ch2, setBool2] = useState(false);
  const check1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setBool1(checked);
    setBool2(false);
  };

  const check2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setBool2(checked);
    setBool1(false);
  };
  return(
    <div className="row">
      <input
        type="checkbox"
        className="checkboxB"
        checked={ch1}
        onClick={check1}
      />
      <div className="checkboxSpacer"/>
      <input
        type="checkbox"
        className="checkboxR"
        checked={ch2}
        onClick={check2}
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