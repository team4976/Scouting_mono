import "./index.css"
import { useState, useEffect } from "react";
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
  useEffect(() => {
    console.log("Reloaded");
    const stored = localStorage.getItem("data");
    vlars = JSON.parse(stored);
  }, []);

const handleChange = (event) => {
  const newText = event.target.value;
  setText(newText);
  vlars[vlar] = newText;
  console.log (vlars[vlar]);
  save()
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
  useEffect(() => {
    console.log("Reloaded");
    console.log(vlars.teamno)
    const stored = localStorage.getItem("data");
    vlars = JSON.parse(stored);
  }, []);

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
    save()
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
    save()
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
  useEffect(() => {
    console.log("Reloaded");
    const stored = localStorage.getItem("data");
    vlars = JSON.parse(stored);
  }, []);
  const [ch1, setCheck1] = useState(vlars.yellow || false)
  const [ch2, setCheck2] = useState(vlars.red || false)

  const handleCheck1 = (event) => {
    const newCh1 = event.target.checked
    vlars.red = false
    vlars.yellow = newCh1
    setCheck1(newCh1)
    setCheck2(false)
    save()
  }

  const handleCheck2 = (event) => {
    const newCh2 = event.target.checked
    vlars.red = newCh2
    vlars.yellow = false
    setCheck2(newCh2)
    setCheck1(false)
    save()
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
  useEffect(() => {
    console.log("Reloaded");
    const stored = localStorage.getItem("data");
    vlars = JSON.parse(stored);
  }, []);
  const [che, setCheck] = useState(vlars[vlar] || false)

  const handleCheck = (event) => {
    const newType = event.target.checked;
    setCheck(newType);
    vlars[vlar] = newType;
    console.log (vlars[vlar]);
    save()
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
  useEffect(() => {
    console.log("Reloaded");
    const stored = localStorage.getItem("data");
    vlars = JSON.parse(stored);
  }, []);
  const [numb, setNum] = useState(vlars[vlar] || 0)

  const handleAdd = () => {
    const newNum = (vlars[vlar] += 1) 
    vlars[vlar] = newNum;
    setNum(newNum)
    save()
  }

  const handleSub = () => {
    const newNum = (vlars[vlar] -1) 
    vlars[vlar] = newNum;
    setNum(newNum)
    save()
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
  useEffect(() => {
    console.log("Reloaded");
    const stored = localStorage.getItem("data");
    vlars = JSON.parse(stored);
  }, []);
  const [numb, setNum] = useState(vlars[vlar] || 0)

  const handleAdd = () => {
    const newNum = (vlars[vlar] += 1) 
    vlars[vlar] = newNum;
    setNum(newNum)
    save()
  }

  const handleAdd5 = () => {
    const newNum = (vlars[vlar] += 5) 
    vlars[vlar] = newNum;
    setNum(newNum)
    save()
  }

  const handleSub = () => {
    const newNum = (vlars[vlar] -1) 
    vlars[vlar] = newNum;
    setNum(newNum)
    save()
  }

  const handleSub5 = () => {
    const newNum = (vlars[vlar] -5) 
    vlars[vlar] = newNum;
    setNum(newNum)
    save()
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
  useEffect(() => {
    console.log("Reloaded");
    const stored = localStorage.getItem("data");
    vlars = JSON.parse(stored);
  }, []);
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
    save()
  }

  const handleCheck2 = () => {
    checkL1(false)
    checkL2(true)
    checkL3(false)
    checkLF(false)
    vlars.endclimb = 2
    console.log(vlars.endclimb)
    save()
  }

  const handleCheck3 = () => {
    checkL1(false)
    checkL2(false)
    checkL3(true)
    checkLF(false)
    vlars.endclimb = 3
    console.log(vlars.endclimb)
    save()
  }

  const handleCheckF = () => {
    checkL1(false)
    checkL2(false)
    checkL3(false)
    checkLF(true)
    vlars.endclimb = 0;
    vlars.fall = true;
    console.log(vlars.endclimb)
    save()
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
    console.log("cleared")
  }
  const load = () => {
    const stored = localStorage.getItem("data")
    vlars = JSON.parse(stored)
    setListv(vlars)

  }
    
  useEffect(() => {
    const stored = localStorage.getItem("data")
    vlars = JSON.parse(stored)
    setListv(vlars)
  }, []);
  return(
    <div className="column">
      <pre>{JSON.stringify(listv, null, 2)}</pre>
      <button className="navBut" onClick={clearDat}>
        Clear Data
      </button>
            <button className="navBut"onClick={save}>
        Save Data
      </button>

      <button className="navBut"onClick={load}>
        Load Data
      </button>
    </div>
  )
}

<<<<<<< HEAD
export function saveData() {
  localStorage.setItem("data", vlars)
}

export function PackBits() {
  const testVal = () => {
    vlars.color = true
    vlars.teamno = "15"
    vlars.noshow = true
    vlars.autocollect = false

    vlars.matchno = "50"
    vlars.autooutp = true

    vlars.autoscore = 52
    vlars.autoclimb = true

    vlars.automiss = 2
    vlars.autodepo = true
    vlars.autocollect = false
    vlars.a1outp = true
    vlars.a1take = false

    vlars.a1score = 54
    vlars.a2score = 99
    vlars.endscore = 23

    vlars.a1miss = 40
    vlars.a2miss = 31
    vlars.endmiss = 16

    vlars.i1fill = true
    vlars.i2fill = false
    vlars.i1move = true
    vlars.i2move = false
    vlars.endclimb = 1
    vlars.yellow = false
    vlars.fall = true
    console.log(vlars)
  }
  
  const packBits = () => {
    let autoclm
    if (vlars.autoclimb == true) {
      if (vlars.autodown == true) {
        autoclm = 3
      } else if (vlars.autofailed == true){
        autoclm = 2
      } else {
        autoclm = 1
      }
    } else {
      autoclm = 0
    }
    let telescore = vlars.a1score + vlars.a2score + vlars.endscore
    let telemiss = vlars.a1miss + vlars.a2miss + vlars.endmiss

    const Bits = new Uint8Array(10)
    Bits[0] = (((Number(vlars.color) & 0x01) << 7) | ((Number(vlars.teamno) & 0x1F) << 2) | ((Number(vlars.noshow) & 0x01) << 1) | (Number(vlars.autocollect) & 0x01))
    Bits[1] = (((Number(vlars.matchno) & 0x007f) << 1) | (Number(vlars.autooutp) & 0x01))
    Bits[2] = (((Number(vlars.autoscore) & 0x003f) << 2) | (Number(autoclm) & 0x003))
    Bits[3] = (((Number(vlars.automiss) & 0x00f) << 4) | ((Number(vlars.autodepo) & 0x001) << 3) | ((Number(vlars.autocollect) & 0x001) << 2) |((Number(vlars.a1take) & 0x001) << 1) | (Number(vlars.a1outp) & 0x001))
    Bits[4] = (Number(telescore) & 0x00ff)
    Bits[5] = (((Number(telemiss) & 0x007f) << 1) | (Number(vlars.a2outp) & 0x001))
    Bits[6] = (((Number(vlars.i1fill) & 0x001) << 7) | ((Number(vlars.i2fill) & 0x001) << 6) | ((Number(vlars.i1move) & 0x001) << 5) | ((Number(vlars.i2move) & 0x001) << 4) | ((Number(vlars.endclimb) & 0x003) << 3) | ((Number(vlars.yellow) & 0x001) << 1) | (Number(vlars.fall) & 0x0001))

    console.log(Bits)
  }
  return(
    <div>
      <button className="navBut" onClick={testVal}>
        Set test Vars
      </button>
      <button className="navBut" onClick={packBits}>
        Pack Bits
      </button>
    </div>
  )
}
=======

const save = () => {
    localStorage.setItem("data", JSON.stringify(vlars))
    console.log("saved")
  }
  
>>>>>>> 2c98d0a04628b220236da78921090519eb5754d7
