import "./index.css"
import { baseVlars, Checkbox, setBase, TextBox, vlars } from "./Functions"
import { HomeBut } from "./App"
import { useState, useEffect } from "react"

const students = [
    "Mentor/Exempt",
    "Preston A",
    "Abodi A",
    "Zackery B",
    "Ben B",
    "Brooke B",
    "Aurora B",
    "Luke B",
    "Aaron C",
    "Harrison Harrison", 
    "Little boy",
    "Alexander D",
    "Saanvi D",
    "Sanav D", 
    "Tazel D",
    "Harrison F",
    "Ritu G", 
    "Ben H",
    "Theo H",
    "Hudson H",
    "Gregory Meister",
    "Sakib I", 
    "Rikki J",
    "Aidan K",
    "Eric K",
    "Graeme L",
    "Hudson L",
    "Drew L",
    "Sully M",
    "David M",
    "Greyson M", 
    "Cameron M",
    "Riley M",
    "Duncan M",
    "Charlotte P",
    "Neev P",
    "Faizan R",
    "Daniel R",
    "Matthew R",
    "Baldie -From Becca",
    "Ben R",
    "Roy R",
    "Parker S",
    "Neev S",
    "Matthew S",
    "Max T",
    "Ben T",
    "Austin K",
    "Aarav V",
    "Ally W",
    "Rachelle Y",
]

function SaveBut() {
    const [name, setName] = useState(localStorage.getItem("scoutName") || "");
    const [scoutIdSave, setScoutIdSave] = useState(localStorage.getItem("scoutId"))

    const saveID = () => {
        localStorage.setItem("scoutId", String(vlars.sid));
        localStorage.setItem("Position", String(vlars.position));
        generateName();
    }

    const generateName = () => {
        let scoutId = vlars.sid;
        let position = vlars.position
        baseVlars.position = position
        baseVlars.sid = scoutId
        let scoutName = students[scoutId];
        localStorage.setItem("baseVlars", JSON.stringify(baseVlars))
        console.log(baseVlars)
        if (scoutName !== undefined) {
            const fullName = `Welcome ${scoutName}`;
            setName(fullName);
            setScoutIdSave(String(scoutId));
            localStorage.setItem("scoutName", fullName);
            localStorage.setItem("scoutID", fullName)
            setBase()
        } else {
            setName("ERROR! Wrong or invalid Scouting ID inputted");
        }
    }

    useEffect(() => {

    }, [name],);

    return (
        <div>
            <button className="navBut" onClick={saveID}>Save Settings</button>
            <p>{name}</p>
        </div>
    );
}

function PositionSelect() {
    let position = localStorage.getItem("Position")
    vlars.position = Number(position)
    let rl = false
    let rm = false
    let rr = false
    let bl = false
    let bm = false
    let br = false
    const falsify = () => {
        rl = false
        rm = false
        rr = false
        bl = false
        bm = false
        br = false
    }
    const setPosition = () => {
        if (position == "1") {
            falsify()
            rl = true
        } else if (position == "2"){
            falsify()
            rm = true
        } else if (position == "3"){
            falsify()
            rr = true
        } else if (position == "4"){
            falsify()
            bl = true
        } else if (position == "5"){
            falsify()
            bm = true 
        } else if (position == "6"){
            falsify()
            br = true
        } else {
            falsify()
            rl = true
        }
    }
    setPosition()
    const [chkrl, setChkrl] = useState(rl)
    const [chkrm, setChkrm] = useState(rm)
    const [chkrr, setChkrr] = useState(rr)
    const [chkbl, setChkbl] = useState(bl)
    const [chkbm, setChkbm] = useState(bm)
    const [chkbr, setChkbr] = useState(br)
    const falsify2 = () => {
        setChkrl(false)
        setChkrm(false)
        setChkrr(false)
        setChkbl(false)
        setChkbm(false)
        setChkbr(false)
    }
    const handleCheckRl = () => {
        falsify2()
        setChkrl(true)
        localStorage.setItem("Position", "1")
        position = "1"
        vlars.position = Number(position)
    }
    const handleCheckRm = () => {
        falsify2()
        setChkrm(true)
        localStorage.setItem("Position", "2")
        position = "2"
        vlars.position = Number(position)
    }
    const handleCheckRr = () => {
        falsify2()
        setChkrr(true)
        localStorage.setItem("Position", "3")
        position = "3"
        vlars.position = Number(position)
    }
    const handleCheckBl = () => {
        falsify2()
        setChkbl(true)
        localStorage.setItem("Position", "4")
        position = "4"
        vlars.position = Number(position)
    }
    const handleCheckBm = () => {
        falsify2()
        setChkbm(true)
        localStorage.setItem("Position", "5")
        position = "5"
        vlars.position = Number(position)
    }
    const handleCheckBr = () => {
        falsify2()
        setChkbr(true)
        localStorage.setItem("Position", "6")
        position = "6"
        vlars.position = Number(position)
    }
    return(
        <div>
            <div className="subTitle">  
                Position Selection
            </div>
            <div className="collumn">
                <div className="subTitle">Red</div>
                <div className="row">
                    <div className="titleDef">Left</div>
                    <div className="titleDef">Middle</div>
                    <div className="titleDef">Right</div>
                    
                </div>
                <div className="row">
                    <input type="checkbox" className="checkboxLongR" checked={chkrl} onChange={handleCheckRl}/>
                    <input type="checkbox" className="checkboxLongR" checked={chkrm} onChange={handleCheckRm}/>
                    <input type="checkbox" className="checkboxLongR" checked={chkrr} onChange={handleCheckRr}/>
                </div>
            </div>
            <div className="collumn">
                <div className="subTitle">Blue</div>
                <div className="row">
                    <div className="titleDef">Left:</div>
                    <div className="titleDef">Middle:</div>
                    <div className="titleDef">Right:</div>
                    
                </div>
                <div className="row">
                    <input type="checkbox" className="checkboxLongB" checked={chkbl} onChange={handleCheckBl}/>
                    <input type="checkbox" className="checkboxLongB" checked={chkbm} onChange={handleCheckBm}/>
                    <input type="checkbox" className="checkboxLongB" checked={chkbr} onChange={handleCheckBr}/>
                </div>
            </div>
        </div>
    )
}

export function SettingsPage() {
    return(
        <div className="screen">
            This is the settings page
            <TextBox tip={"Student ID"} vlar="sid" max={50}/>
            <div className="spacer2"/>
            <PositionSelect/>
            <SaveBut/>
            <HomeBut reset={false}/>
        </div>
    )

}
