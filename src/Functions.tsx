import "./index.css"
//Input Buttons
export function TextBox() {
  return(
    <input
      type="text"
      placeholder={"Tooltip"}
      className="inputText"
    />
  )
}

export function TeamBox() {
  return(
    <div className="row">
      <input
        type="checkbox"
        className="checkboxB"
      />
      <div className="checkboxSpacer"/>
      <input
        type="checkbox"
        className="checkboxR"
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