import "./index.css"
import { Textbox } from "./functions"
import { Last } from "./App"
import { useState, useEffect } from "react"
import { sdat, basedat } from "./functions"

let students=[
    "Mentors",
    "Preston A",
    "Abodi A",
    "Zackary B",
    "Ben B",
    "Brooke B",
    "Aurora B",
    "Luke B",
    "Aaron C",
    "Rebecca C",
    "Graeme D",
    "Alexander D",
    "Saanvi D",
    "Sanav D",
    "Tazel D",
    "Harrison F",
    "Ritu G",
    "Benjamin H",
    "Theo H",
    "Hudson H",
    "Gregory I",
    "Sakib I",
    "Rikki J",
    "Aiden K",
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
    "Quentin R",
    "Benjamin R",
    "Roy R",
    "Parker S",
    "Neev S",
    "Matthew S",
    "Max T",
    "Ben T",
    "Austin V.K",
    "Aarav V",
    "Ally W",
    "Rachelle Y",
]


export function SettingsPg(){
    const[name, setName]=useState(localStorage.getItem("scoutName")||"")
    const[Idsave, setIdsave]=useState(localStorage.getItem("scoutId"))
    
    const saveID=()=>{
        console.log("Saved ID as"+ sdat.sid)
        localStorage.setItem("scoutId", String(sdat.sid))
        generateName()
    }

    const generateName=()=>{
        console.log("Generating Name")
        let scoutId=sdat.sid
        basedat.sid=scoutId
        console.log(basedat)
        let scoutName=students[scoutId]

        if (scoutName!==undefined){
            const fullName=`Welcome! ${scoutName}`;
            setName(fullName)
            setIdsave(String(scoutId))
            localStorage.setItem("scoutName", fullName)
        } else{
            setName("Invalid Scouting ID")
        }
    }

    useEffect(()=>{
        console.log("Name updated to:"+name)},[name],)
    

    return(
        <div className="screen">
            <div className="title">
                Settings
            </div>
            <div className="subTitle">
                <p>{name}</p>
             </div>
             
             <div className="row">
             Your ID: <div className="spacer1"> 
                <p>{Idsave}</p>
             </div>
             </div>

            <Textbox sd={"sid"} tip={"Student #"}></Textbox>

            <button className="navBut" onClick={saveID}>
                Save ID
            </button>
               
             <Last last={0}></Last>
        </div>
       
    )
}