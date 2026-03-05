import "./index.css"
import { baseVlars, setBase, TextBox, vlars } from "./Functions"
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
        localStorage.setItem("baseVlars", JSON.stringify(baseVlars))

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

function EventBox() {
    let tog1 = true
    let tog2 = false
    if (vlars.event == 0) {
        tog1 = true
        tog2 = false
    } else if (vlars.event == 1) {
        tog1 = false
        tog2 = true
    }
    const [ch1, setch1] = useState(tog1)
    const [ch2, setch2] = useState(tog2)

    const handleCheck1 = () => {
        if (ch1 == false) {
        vlars.color = false
        setch1(true)
        setch2(false)
        } else {
        setch1(false)
        }
    }

    const handleCheck2 = () => {
        if (ch2 == false) {
        vlars.color = true
        setch2(true)
        setch1(false)
        } else {
        vlars.color = false
        setch2(false)
        }
    }
    return(
        <div className="row">
            <div className="column">
                <div className="subtitle">Durham</div>
                <input
                    type="checkbox"
                    className="checkboxG"
                    onChange={handleCheck1}
                    checked={ch1}
                />
            </div>

            <div className="checkboxSpacer"/>
            <div className="column">
                <div className="subtitle">Waterloo</div>
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

export function SettingsPage() {
    return(
        <div className="screen">
            This is the settings page
            <TextBox tip={"Student ID"} vlar="sid" max={50}/>
            <div className="spacer2"/>
            <EventBox/>
            <SaveBut/>
            <HomeBut reset={false}/>
        </div>
    )

}
