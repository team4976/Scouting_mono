import { useState } from "react"

export const sdat={
    color: false,
    teamnum:"",
    matchnum:"",
    noshow:false,

    autoscore:0,
    automiss:0,
    autoclimb:false,
    autofcollect:false,
    autoclimbdown:false,
    autofailed:false,
    autocollecto:false,
    autocollectd:false,

    act1score:0,
    act1miss:0,
    act1fillo:false,
    act1takeo:false,

    inact1def:false,
    inact1fcollect:false,
    inact1fillo:false,
    inact1fmove:false,

    act2score:0,
    act2miss:0,
    act2fillo:false,
    act2takeo:false,

    inact2def:false,
    inact2fcollect:false,
    inact2fillo:false,
    inact2fmove:false,

    climb1:false,
    climb2:false,
    climb3:false,
    noclimb:false,
    breakdown:0,
    recovery:0,

    fouls:0,
    ycard:false,
    rcard:false,
}

export function Textbox({sd, tip}){
    const [text, settext]=useState(sdat[sd]||"")
    const handlechange=(event)=>{
        const newtext=event.target.value
        settext(newtext)
        sdat[sd]=newtext
    }

  return (
    <input
        value={text}
      type="text"
      placeholder={tip}
      onChange={handlechange}
      className="inputText"/>
  )
}


export function CheckboxT({sd}){
   const [chk,setchk]=useState<Boolean>(sdat[sd]||null)

        if (chk == true) {
          sdat[sd] = true
        }

        if (chk ==false){
          sdat[sd] = false
        }

  
  return (
     <div className="row">
        <input
      type="checkbox"
      checked={chk===false}
      onChange={()=>setchk(false)}
      className="checkboxB"

      />

      <input
      type="checkbox" 
      className="checkboxR"
      checked={chk===true}
      onChange={()=>setchk(true)}
      />
      </div>
)
}

export function CheckboxC(){
const [goty, setgoty]=useState(sdat.ycard||false)
const [gotr, setgotr]=useState(sdat.rcard||false)

  return (
     <div className="row"><input 
      type="checkbox"
      checked={sdat.ycard}
      className="checkboxY"
      />
     
      
      <input
      type="checkbox"
      checked={sdat.rcard}
      className="checkboxR"
       />
      </div>
)
}

export function CheckboxG({sd}) {
    const [chk,setchk]=useState(sdat[sd]||false)
    const handlecheck=(event)=>{
        const newtype=event.target.checked
        setchk(newtype)
        sdat[sd]=newtype
    }
    return(
    <input
    checked={chk}
    onChange={handlecheck}
    type="checkbox"
    className="checkboxG">
    </input>
  )

}

export function CheckboxCl(){
    return(
        <input
        type="checkbox"
        className="checkboxG">
        </input>
    )
}

export function Tally(){
  return(
    <div className="row">
     <button className="tallyButton">
      -5
     </button>
      <button className="tallyButton">
      -
     </button>
     <div className="counter"></div>
      <button className="tallyButton">
      +
     </button>
      <button className="tallyButton">
      +5
     </button>
      </div>
  )
}

export function TallyB(){
  return(
    <div className="row">
      <div className="tallyButton">
        -
      </div>
      <button className="counter"></button>
      <div className="tallyButton">
        +
      </div>
    </div>
  )
}