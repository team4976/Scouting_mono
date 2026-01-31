import "./index.css"
import { useState } from "react";
//Variables were tracking
export let vlars = {
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
  autowin: false,
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
  endscore: 0,
  endmiss: 0,
  endclimb: 0, //0 = no, 1 = l1, 2 = l2, 3 = l3
  fall: false,
  break: 0,
  recover: 0,
  //post
  fouls: 0,
  yellow: false,
  red: false,
}

export const baseVlars = { ...vlars }; 

let touched = false //to see if the color box had been touched yet
let tog1 = false //toggle for red
let tog2 = false // toggle for blue

let cl1 = false
let cl2 = false
let cl3 = false
let clf = false // Vars to update the climb box

type VlarKey = keyof typeof vlars;

type TextProps = {
  vlar: VlarKey;
  tip: string;
}

//Input Buttons
export function TextBox({vlar, tip}: TextProps) {
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
  const [ch1, setCheck1] = useState(vlars.yellow || false)
  const [ch2, setCheck2] = useState(vlars.red || false)

  const handleCheck1 = (event) => {
    const newCh1 = event.target.checked
    vlars.red = false
    vlars.yellow = newCh1
    setCheck1(newCh1)
    setCheck2(false)
  }

  const handleCheck2 = (event) => {
    const newCh2 = event.target.checked
    vlars.red = newCh2
    vlars.yellow = false
    setCheck2(newCh2)
    setCheck1(false)
  }
  return(
    <div className="row">
      <input
        type="checkbox"
        className="checkboxY"
        checked={ch1}
        onChange={handleCheck1}
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

export function Checkbox({vlar}) {
  const [che, setCheck] = useState(vlars[vlar] || false)

  const handleCheck = (event) => {
    const newType = event.target.checked;
    setCheck(newType);
    vlars[vlar] = newType;
    console.log (vlars[vlar]);
  }
  return(
      <input
        type="checkbox"
        className="checkboxG"
        checked={che}
        onChange={handleCheck}
      />
  )
}

export function Tally({vlar}) {
  const [numb, setNum] = useState(vlars[vlar] || 0)

  const handleAdd = () => {
    const newNum = (vlars[vlar] += 1) 
    vlars[vlar] = newNum;
    setNum(newNum)
  }

  const handleSub = () => {
    const newNum = (vlars[vlar] -1) 
    vlars[vlar] = newNum;
    setNum(newNum)
  }
  return(
    <div className="row">
      <button className="tallyButton"
      onClick={handleSub}
      >
        -
      </button> 
      <div className="counter">{numb}</div> 
      <button className="tallyButton"
      onClick={handleAdd}>
        +
      </button> 
    </div>
  )
}

export function Score({vlar}) {
  const [numb, setNum] = useState(vlars[vlar] || 0)

  const handleAdd = () => {
    const newNum = (vlars[vlar] += 1) 
    vlars[vlar] = newNum;
    setNum(newNum)
  }

  const handleAdd5 = () => {
    const newNum = (vlars[vlar] += 5) 
    vlars[vlar] = newNum;
    setNum(newNum)
  }

  const handleSub = () => {
    const newNum = (vlars[vlar] -1) 
    vlars[vlar] = newNum;
    setNum(newNum)
  }

  const handleSub5 = () => {
    const newNum = (vlars[vlar] -5) 
    vlars[vlar] = newNum;
    setNum(newNum)
  }
  return(
    <div className="row">
      <button className="tallyButton"
      onClick={handleSub5}>
        -5
      </button> 
      <button className="tallyButton"
      onClick={handleSub}>
        -
      </button> 
      <div className="counter">
        {numb}
      </div> 
      <button className="tallyButton"
      onClick={handleAdd}>
        +
      </button> 
      <button className="tallyButton"
      onClick={handleAdd5}>
        +5
      </button> 
    </div>
  )
}

export function ClimbBox() {
  if (vlars.endclimb == 1) {
    cl1 = true
    cl2 = false
    cl3 = false
    clf = false
  }else if (vlars.endclimb == 2) {
    cl1 = false
    cl2 = true
    cl3 = false
    clf = false
  }else if (vlars.endclimb == 3) {
    cl1 = false
    cl2 = false
    cl3 = true
    clf = false
  }else if (vlars.endclimb == 0 && vlars.fall == true) {
    cl1 = false
    cl2 = false
    cl3 = false
    clf = true
  }
  const [chk1, checkL1] = useState(cl1)
  const [chk2, checkL2] = useState(cl2)
  const [chk3, checkL3] = useState(cl3)
  const [chkF, checkLF] = useState(clf)
  const handleCheck1 = () => {
    checkL1(true)
    checkL2(false)
    checkL3(false)
    checkLF(false)
    vlars.endclimb = 1
    console.log(vlars.endclimb)
  }

  const handleCheck2 = () => {
    checkL1(false)
    checkL2(true)
    checkL3(false)
    checkLF(false)
    vlars.endclimb = 2
    console.log(vlars.endclimb)
  }

  const handleCheck3 = () => {
    checkL1(false)
    checkL2(false)
    checkL3(true)
    checkLF(false)
    vlars.endclimb = 3
    console.log(vlars.endclimb)
  }

  const handleCheckF = () => {
    checkL1(false)
    checkL2(false)
    checkL3(false)
    checkLF(true)
    vlars.endclimb = 0;
    vlars.fall = true;
    console.log(vlars.endclimb)
  }
  return(
    <div className="row">
      <div className="column">
        <div className="subTitle">L1</div>
          <input
            type="checkbox"
            className="checkboxG"
            onChange={handleCheck1}
            checked={chk1}
          />
        </div>
        <div className="spacer1"/>
        <div className="column">
        <div className="subTitle">L2</div>
          <input
            type="checkbox"
            className="checkboxG"
            onChange={handleCheck2}
            checked={chk2}
          /> 
        <div className="subTitle">Fell</div>
          <input
            type="checkbox"
            className="checkboxG"
            onChange={handleCheckF}
            checked={chkF}
          />
        </div>
        <div className="spacer1"/>
        <div className="column">
        <div className="subTitle">L3</div>
          <input
            type="checkbox"
            className="checkboxG"
            onChange={handleCheck3}
            checked={chk3}
          />
      </div>
    </div>
  )
}

export function ClearData() {
const [listv, setListv] = useState(vlars)
  const clearDat = () => {
    vlars = baseVlars
    setListv(vlars)
  }
  return(
    <div>
      <pre>{JSON.stringify(listv, null, 2)}</pre>
      <button className="navBut" onClick={clearDat}>
        Clear Data
      </button>
    </div>
  )
}

export function saveData() {
  localStorage.setItem("data", vlars)
}