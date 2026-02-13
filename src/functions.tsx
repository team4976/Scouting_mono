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

    autowin:false,

    act1score:0,
    act1miss:0,
    act1fillo:false,
    act1takeo:false,

    inact1def:false,
    inact1fillo:false,
    inact1fmove:false,


    act2score:0,
    act2miss:0,
    act2fillo:false,
    act2takeo:false,


    inact2def:false,
    inact2fillo:false,
    inact2fmove:false,
   
    endscore:0,
    endmiss:0,
    climb1:false,
    climb2:false,
    climb3:false,
    fall:false,
    breakdown:0,
    recovery:0,

    fouls:0,
    ycard:false,
    rcard:false,

    sid:0,

    
}

export let basedat=sdat

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

    const handlecheckR=(event)=>{
        setgotr(event.target.checked)
        setgoty(false)
        sdat.ycard = false
        sdat.rcard = event.target.checked
    }

        const handlecheckY=(event)=>{
        setgoty(event.target.checked)
        setgotr(false)
        sdat.ycard = event.target.checked
        sdat.rcard = false
    }
  return (
     <div className="row"><input 
      type="checkbox"
      checked={goty}
      onChange={handlecheckY}
      className="checkboxY"
      />
     
      
      <input
      type="checkbox"
      checked={gotr}
      onChange={handlecheckR}
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
  const [cl1, setcl1]=useState(sdat.climb1||false)
  const [cl2, setcl2]=useState(sdat.climb2||false)
  const [cl3, setcl3]=useState(sdat.climb3||false)
  const [fall, setfall]=useState(sdat.fall||false)

  const handlecheckcl1=(event)=>{
        setcl1(event.target.checked)
        setcl2(false)
        setcl3(false)
        setfall(false)
        sdat.climb2 = false
        sdat.climb3 = false
        sdat.fall= false
        sdat.climb1 = event.target.checked
    }

        const handlecheckcl2=(event)=>{
        setcl2(event.target.checked)
        setcl1(false)
        setcl3(false)
        setfall(false)
        sdat.climb1 = false
        sdat.climb3 = false
        sdat.fall= false
        sdat.climb2 = event.target.checked

        }

        const handlecheckcl3=(event)=>{
        setcl3(event.target.checked)
        setcl1(false)
        setcl2(false)
        setfall(false)
        sdat.climb1 = false
        sdat.climb2 = false
        sdat.fall= false
        sdat.climb3 = event.target.checked

        }

        const handlecheckfall=(event)=>{
        setfall(event.target.checked)
        setcl1(false)
        setcl3(false)
        setcl2(false)
        sdat.climb1 = false
        sdat.climb3 = false
        sdat.climb2= false
        sdat.fall = event.target.checked

        }
    return(
      <div className="screen">
       <div className="row">
        <div className="spacer1">
        <div className="column"> L1
        <input
      type="checkbox"
      onChange={handlecheckcl1}
      className="checkboxG"
      checked={cl1}

      />
      </div>
      </div>

      <div className="spacer1">
      <div className="column">L2
       <input
      type="checkbox"
      checked={cl2}
      onChange={handlecheckcl2}
      className="checkboxG"
      /> 
    </div>
    </div>

      <div className="spacer1">
    <div className="column">L3
       <input
       checked={cl3}
       onChange={handlecheckcl3}
      type="checkbox"
      className="checkboxG"
      /> 
      </div>
      </div>
      </div>

      <div className="spacer2">
      <div className="column">Fall
      <input
      type="checkbox"
      checked={fall}
       onChange={handlecheckfall}
      className="checkboxG"
      /> 
      </div>
      </div>
      </div>
    )
}

export function Tally({sd, max}){
  const [count, setCount]=useState<number>(sdat[sd]||0)
    
  const handleincrease =()=>{
    setCount(sdat[sd]=Math.max(0, count +5))
    if (count >= max) {
      setCount(sdat[sd]=(max))
    }
  }

  const handledecrease =()=>{
    setCount(sdat[sd]=Math.max(0, count -5))
  }
  
 const handleincrease1 =()=>{
    setCount(sdat[sd]=Math.max(0, count +1))
if (count >= max) {
      setCount(sdat[sd]=(max))
    }  
  }

  
  const handledecrease1 =()=>{
    setCount(sdat[sd]=Math.max(0, count -1))}
    

  return(
    <div className="row">
     <button className="tallyButton"
     onClick={handledecrease}
     > 
      -5
     </button>
      <button className="tallyButton"
      onClick={handledecrease1}>
      -
     </button>
     <div className="counter">
      <span>{count}</span>
     </div>
      <button className="tallyButton"
      onClick={handleincrease1}
      >
      +
     </button>
      <button className="tallyButton"
      onClick={handleincrease}
      >
      +5
     </button>
      </div>
  )
}

export function TallyB({sd, max}){

    const [count1, setCount1]=useState<number>(sdat[sd]||0)

  const handleincrease =()=>{
    setCount1(sdat[sd]=Math.max(0, count1 +1))
    if (count1 >= max) {
      setCount1(sdat[sd]=(max))
    }
  }

  const handledecrease =()=>{
    setCount1(sdat[sd]=Math.max(0, count1 -1))}
    
  return(
    <div className="row">
      <div className="tallyButton"
      onClick={handledecrease}
      >
        -
      </div>
      <div className="counter">
      <span>{count1}</span> 
      </div>
      <button className="tallyButton"
      onClick={handleincrease}
      >
        +
      </button>
    </div>
  )
}