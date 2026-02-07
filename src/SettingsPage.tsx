import "./index.css"
import { baseVlars, TextBox, vlars } from "./Functions"
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
    "Rebecca C", 
    "Graeme D",
    "Alexander D",
    "Saanvi D",
    "Sanav D", 
    "Tazel D",
    "Harrison F",
    "Ritu G", 
    "Ben H",
    "Theo H",
    "Hudson H",
    "Greg I",
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
    "Matthew R",
    "Quentin R",
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
        console.log("Saved ID as " + vlars.sid);
        localStorage.setItem("scoutId", String(vlars.sid));
        generateName();
    }

    const generateName = () => {
        console.log("Generating Name");
        let scoutId = vlars.sid;
        baseVlars.sid = scoutId
        console.log(baseVlars)
        let scoutName = students[scoutId];

        if (scoutName !== undefined) {
            const fullName = `Welcome ${scoutName}`;
            setName(fullName);
            setScoutIdSave(String(scoutId));
            localStorage.setItem("scoutName", fullName);
        } else {
            setName("ERROR! Wrong or invalid Scouting ID inputted");
        }
    }

    useEffect(() => {
        console.log("Name updated to: " + name);
    }, [name],);

    return (
        <div>
            <button className="navBut" onClick={saveID}>Save Scouting ID</button>
            <p>{name}</p>
            <p>{scoutIdSave}</p>
        </div>
    );
}

export function SettingsPage() {
    return(
        <div className="screen">
            This is the settings page
            <TextBox tip={"Student ID"} vlar="sid"/>
            <SaveBut/>
            <HomeBut/>
        </div>
    )

}
