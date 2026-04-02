import "./index.css"
import { useState, useEffect, use } from "react";
import { matches } from "./Matches";


const defaultVlars = {
  //pregame
  color: false,
  noshow: false,
  teamno: "",
  matchno: "",
  startingPosition: 0,
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
  enterMid: false,
  crossMid: false,
  //active
  a1score: 0,
  a1miss: 0,
  a1outp: false,
  a1take: false,
  a1defend:false,
  a2score: 0,
  a2miss: 0 ,
  a2outp: false,
  a2take: false,
  a2defend: false,
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
  //Extra
  sid: 0,
  position: 0,
}

type Vlars = typeof defaultVlars;

function createVlars(overrides: Partial<Vlars> = {}): Vlars {
  return {
    ...defaultVlars,
    ...overrides,
  };
}

function readStoredVlars(key: string): Partial<Vlars> | null {
  const storedValue = localStorage.getItem(key);

  if (storedValue == null) {
    return null;
  }

  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(`Unable to parse ${key} from localStorage`, error);
    return null;
  }
}

function loadVars(base: Vlars): Vlars {
  const storedVars = readStoredVlars("vars");

  if (storedVars == null) {
    return createVlars(base);
  }

  return createVlars({
    ...base,
    ...storedVars,
  });
}

export let baseVlars = setBase(); 
export let history: string[] = []
export let vlars = loadVars(baseVlars)

export function setBase () {
  const storedBase = readStoredVlars("baseVlars")

  return createVlars({
    sid: Number(storedBase?.sid ?? 0),
    event: Number(storedBase?.event ?? 0),
    position: Number(storedBase?.position ?? 1),
  })
} 
export function updateVars () {
  baseVlars = setBase()
  vlars = loadVars(baseVlars)
}

function saveVars() {
  const dat = JSON.stringify(vlars)
  localStorage.setItem("vars", dat)
}
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
  max: number
}

//Input Buttons

//Text field 
export function TextBox({vlar, tip, max}: TextProps) {
  const [text, setText] = useState(vlars[vlar] || '');
const handleChange = (event) => {
  let newText
  if (isNaN(Number(event.target.value))) {
    newText = 0;
  } else {
    newText = Number(event.target.value)
  }
  if (newText > max) {
    newText = max
  }
  setText(String(newText));
  vlars[vlar] = String(newText);
  saveVars()
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

//checkboxes for the teams color
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
    saveVars()
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
    saveVars()
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

//box for ylw and red cards
export function CardBox() {
  const [ch1, setCheck1] = useState(vlars.yellow || false)
  const [ch2, setCheck2] = useState(vlars.red || false)

  const handleCheck1 = (event) => {
    const newCh1 = event.target.checked
    vlars.red = false
    vlars.yellow = newCh1
    setCheck1(newCh1)
    setCheck2(false)
    saveVars()
  }

  const handleCheck2 = (event) => {
    const newCh2 = event.target.checked
    vlars.red = newCh2
    vlars.yellow = false
    setCheck2(newCh2)
    setCheck1(false)
    saveVars()
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

//boolean checkbox
export function Checkbox({vlar}) {
  const [che, setCheck] = useState(vlars[vlar] || false)

  const handleCheck = (event) => {
    const newType = event.target.checked;
    setCheck(newType);
    vlars[vlar] = newType;
    saveVars()
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

//generic tally for something smaller like breakdowns
export function Tally({vlar, max}) {
  const [numb, setNum] = useState(vlars[vlar] || 0)

  const handleAdd = () => {
    setNum(vlars[vlar]=Math.max(0, numb +1))
    if (numb >= max){
      setNum(vlars[vlar]=(max))
    }
    saveVars()
  }

  const handleSub = () => {
    setNum(vlars[vlar]=Math.max(0, numb -1))
    saveVars()
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

//Box for the ball scoring with the + and - 5 button
export function Score({vlar, max}) {
  const [numb, setNum] = useState(vlars[vlar] || 0)

  const handleAdd = () => {
    setNum(vlars[vlar]=Math.max(0, numb +1))
    if (numb >= max){
      setNum(vlars[vlar]=(max))
    }
    saveVars()
  }

    const handleAdd10 = () => {
     setNum(vlars[vlar]=Math.max(0, numb +10))
    if (numb >= max){
      setNum(vlars[vlar]=(max))
    }
    saveVars()
  }

  const handleAdd5 = () => {
     setNum(vlars[vlar]=Math.max(0, numb +5))
    if (numb >= max){
      setNum(vlars[vlar]=(max))
    }
    saveVars()
  }

  const handleSub = () => {
    setNum(vlars[vlar]=Math.max(0, numb -1))
    saveVars()
  }

  const handleSub5 = () => {
    setNum(vlars[vlar]=Math.max(0, numb -5))
    saveVars()
  }

  const handleSub10 = () => {
    setNum(vlars[vlar]=Math.max(0, numb -10))
    saveVars()
  }

  return(
    <div className="row">
      <button className="tallyButton"
      onClick={handleSub10}>
        -10
      </button> 
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
      <button className="tallyButton"
      onClick={handleAdd10}>
        +10
      </button> 
    </div>
  )

}

//Function to set the endgame climbing
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
  } else {
    cl1 = false
    cl2 = false
    cl3 = false
    clf = false
  }
  const [chk1, checkL1] = useState(cl1)
  const [chk2, checkL2] = useState(cl2)
  const [chk3, checkL3] = useState(cl3)
  const [chkF, checkLF] = useState(clf)
  const handleCheck1 = () => {
    if (vlars.endclimb == 1) {
      checkL1(false)
      checkL2(false)
      checkL3(false)
      checkLF(false)
      vlars.endclimb = 0;
    } else {
      checkL1(true)
      checkL2(false)
      checkL3(false)
      checkLF(false)
      vlars.endclimb = 1
    }
    saveVars()
  }

  const handleCheck2 = () => {
    if (vlars.endclimb == 2) {
      checkL1(false)
      checkL2(false)
      checkL3(false)
      checkLF(false)
      vlars.endclimb = 0;
    } else {
      checkL1(false)
      checkL2(true)
      checkL3(false)
      checkLF(false)
      vlars.endclimb = 2
    }
    saveVars()
  }

  const handleCheck3 = () => {
    if (vlars.endclimb == 3) {
      checkL1(false)
      checkL2(false)
      checkL3(false)
      checkLF(false)
      vlars.endclimb = 0;
    } else {
      checkL1(false)
      checkL2(false)
      checkL3(true)
      checkLF(false)
      vlars.endclimb = 3
    }
    saveVars()
  }

  const handleCheckF = () => {
    if (vlars.fall == false){
      checkL1(false)
      checkL2(false)
      checkL3(false)
      checkLF(true)
      vlars.endclimb = 0;
      vlars.fall = true;
    } else {
      checkL1(false)
      checkL2(false)
      checkL3(false)
      checkLF(false)
      vlars.endclimb = 0;
      vlars.fall = false;
    }
    saveVars()
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

//Debuging for the bit packing
export function ClearData() {
const [listv, setListv] = useState(vlars)
  return(
    <div className="column">
      <pre>{JSON.stringify(listv, null, 2)}</pre>
    </div>
  )
}

export function resetVlars () {
  if (history[4] == undefined){
    history.push(JSON.stringify(vlars))
  } else {
    history = history.slice(1, 5)
    history.push(JSON.stringify(vlars))
  }
  baseVlars = setBase()
  vlars = createVlars(baseVlars)
  localStorage.setItem("vars", JSON.stringify(vlars))
}

//My funky magic box to auto set the team number
export function TeamNumberField () {
  const [matchno, setMatchNo] = useState(vlars.matchno || 0)
  const [teamno, setTeamNo] = useState(vlars.teamno || 0)
  const handleChangeMatch = (event) => {
    let newText
    if (isNaN(Number(event.target.value))) {
      newText = 0;
    } else {
      newText = Number(event.target.value)
    }
    vlars.matchno = String(newText)
    setMatchNo(vlars.matchno)
    let newTeamArray = String(matches[Number(newText)-1]).split(",")
    let newTeamNo = String(newTeamArray[vlars.position-1])
    console.log("Base: ")
    console.log(baseVlars)
    console.log("Live: ")
    console.log(vlars)
    if (newTeamNo == "undefined" || vlars.matchno == "0" || Number(vlars.matchno) > matches.length) {
      vlars.teamno = "0"
      setTeamNo("0")
    } else {
      vlars.teamno = newTeamNo
      setTeamNo(vlars.teamno)
    }
  }
  const handleChangeTeam = (event) => {
    let newText
    if (isNaN(Number(event.target.value))) {
      newText = 0;
    } else {
      newText = Number(event.target.value)
    }
    vlars.teamno = String(newText)
    setTeamNo(vlars.teamno)
  }
  return (
    <div className="column">
      <div className="subTitle">Match #</div>
      <input
        type="text"
        placeholder={"Match Number"}
        className="inputText"
        value={matchno}
        onChange={handleChangeMatch}
      />
      <div className="subTitle">Team #</div>
      <input
        type="text"
        placeholder={"Team Number"}
        className="inputText"
        value={teamno}
        onChange={handleChangeTeam}
      />
    </div>
  )
}

export function StartingPositionBox () {
  let pos1
  let pos2
  let pos3
  if (vlars.startingPosition == 0) {
    pos1 = false
    pos2 = false
    pos3 = false
  } else if (vlars.startingPosition == 1) {
    pos1 = true
    pos2 = false
    pos3 = false
  } else if (vlars.startingPosition == 2) {
    pos1 = false
    pos2 = true
    pos3 = false
  } else {
    pos1 = false
    pos2 = false
    pos3 = true
  }
  const [chk1, changeChk1] = useState(pos1)
  const [chk2, changeChk2] = useState(pos2)
  const [chk3, changeChk3] = useState(pos3)
  const handleCheck1 = () => {
    if (chk1 == true) {
      changeChk1(false)
      vlars.startingPosition = 0
    } else {
      changeChk1(true)
      changeChk2(false)
      changeChk3(false)
      vlars.startingPosition = 1
    }
  }
  const handleCheck2 = () => {
    if (chk2 == true) {
      changeChk2(false)
      vlars.startingPosition = 0
    } else {
      changeChk1(false)
      changeChk2(true)
      changeChk3(false)
      vlars.startingPosition = 2
    }
  }
  const handleCheck3 = () => {
    if (chk3 == true) {
      changeChk1(false)
      vlars.startingPosition = 0
    } else {
      changeChk1(false)
      changeChk2(false)
      changeChk3(true)
      vlars.startingPosition = 3
    }
  }
  return(
    <div className="row">
      <div className="column">
        <div className="subTitle">Outpost</div>
        <input
            type="checkbox"
            className="checkboxG"
            onChange={handleCheck1}
            checked={chk1}
          />
      </div>
      <div className="spacer1"/>
      <div className="column">
        <div className="subTitle">Ladder</div>
        <input
            type="checkbox"
            className="checkboxG"
            onChange={handleCheck2}
            checked={chk2}
          />
      </div>
      <div className="spacer1"/>
      <div className="column">
        <div className="subTitle">Depot</div>
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

export function AutoBehaviour() {
  const [ch1, setCheck1] = useState(vlars.enterMid || false)
  const [ch2, setCheck2] = useState(vlars.crossMid || false)

  const handleCheck1 = (event) => {
    const newCh1 = event.target.checked
    vlars.enterMid = newCh1
    setCheck1(newCh1)
    saveVars()
  }

  const handleCheck2 = (event) => {
    const newCh2 = event.target.checked
    vlars.crossMid = newCh2
    setCheck2(newCh2)
    saveVars()
  }
  return(
    <div className="row">
      <div className="column">
        <div className="subTitle">Entered Neutral</div>
        <input
            type="checkbox"
            className="checkboxG"
            onChange={handleCheck1}
            checked={ch1}
        />
      </div>
      <div className="spacer1"/>
      <div className="column">
        <div className="subTitle">Crossed Middle</div>
        <input
            type="checkbox"
            className="checkboxG"
            onChange={handleCheck2}
            checked={ch2}
        />
      </div>
    </div>
  )
}