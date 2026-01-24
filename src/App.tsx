import "./index.css";

export function App() {
  return (          
    <div className="screen">
      <div className="title">HOME PAGE</div>
      <StartBut/>
      <SettBut/>
      <QrBut/>
      <HistoryBut/>
      _______________________________________
      <div className="title">PRE-GAME</div>
      <TextBox/>
      <TextBox/>
      <div className="subTitle">Team Color</div>
      <TeamBox/>
      <div className="subTitle">No Show</div>
      <Checkbox/>
      <Nav/>
      _______________________________________
      <div className="title">AUTO/TRANSITION</div>
      <div className="subTitle">Fuel Scored</div>
      <Score/>
      <div className="subTitle">Fuel Missed</div>
      <Score/>
      <div className="spacer2"/>
      <div className="subTitle">Fuel Collection</div>
      <div className="row">
        <div className="column">
          <div className="subTitle">Collect Outpost</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Move Fuel</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Collect Depot</div>
          <Checkbox/>
        </div>
      </div>
      <div className="spacer2"/>
      <div className="subTitle">Climbing</div>
      <div className="row">
        <div className="column">
          <div className="subTitle">Climbed</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Got Down</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Failed</div>
          <Checkbox/>
        </div>
      </div>
      <div className="subTitle">Win Auto</div>
      <Checkbox/>
      <Nav/>
      _______________________________________
      <div className="title">ACTIVE 1</div>
      <div className="subTitle">Fuel Scored</div>
      <Score/>
      <div className="spacer2"/>
      <div className="subTitle">Fuel Missed</div>
      <Score/>
      <div className="spacer2"/>
      <div className="row">
        <div className="column">
          <div className="subTitle">Filled Outpost</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Took Outpost</div>
          <Checkbox/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="subTitle">Breakdowns</div>
          <Tally/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Recoveries</div>
          <Tally/>
        </div>
      </div>
      <Nav/>
      _______________________________________
      <div className="title">INACTIVE 1</div>
      <div className="subTitle">Defend</div>
      <Checkbox/>
      <div className="spacer2"/>
      <div className="subTitle">Fuel</div>
      <div className="row">
        <div className="column">
          <div className="subTitle">Outpost Fill</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Move Fuel</div>
          <Checkbox/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="subTitle">Breakdowns</div>
          <Tally/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Recoveries</div>
          <Tally/>
        </div>
      </div>
      <Nav/>
      _______________________________________
      <div className="title">ACTIVE 2</div>
      <div className="subTitle">Fuel Scored</div>
      <Score/>
      <div className="spacer2"/>
      <div className="subTitle">Fuel Missed</div>
      <Score/>
      <div className="spacer2"/>
      <div className="row">
        <div className="column">
          <div className="subTitle">Filled Outpost</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Took Outpost</div>
          <Checkbox/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="subTitle">Breakdowns</div>
          <Tally/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Recoveries</div>
          <Tally/>
        </div>
      </div>
      <Nav/>
      _______________________________________
      <div className="title">INACTIVE 2</div>
      <div className="subTitle">Defend</div>
      <Checkbox/>
      <div className="spacer2"/>
      <div className="row">
        <div className="column">
          <div className="subTitle">Outpost Fill</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Move Fuel</div>
          <Checkbox/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="subTitle">Breakdowns</div>
          <Tally/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Recoveries</div>
          <Tally/>
        </div>
      </div>
      <Nav/>
      _______________________________________
      <div className="title">END GAME</div>
      <div className="column">
        <div className="subTitle">Fuel Scored</div>
        <Score/>
      </div>
      <div className="spacer1"/>
      <div className="column">
        <div className="subTitle">Fuel Missed</div>
        <Score/>
      </div>
      <div className="subTitle">Climb</div>
      <div className="row">
        <div className="column">
          <div className="subTitle">L1</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">L2</div>
          <Checkbox/>
          <div className="subTitle">Fell</div>
          <Checkbox/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">L3</div>
          <Checkbox/>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="subTitle">Breakdowns</div>
          <Tally/>
        </div>
        <div className="spacer1"/>
        <div className="column">
          <div className="subTitle">Recoveries</div>
          <Tally/>
        </div>
      </div>
      <Nav/>
      _______________________________________
      <div className="title">POST GAME</div>
      <div className="subTitle">Fouls</div>
      <TextBox/>
      <div className="spacer2"/>
      <div className="subTitle">Cards</div>
      <CardBox/>
      <Nav/>
    </div>
  );
}
//Navigation Buttons
export function StartBut() {
  return(
   <button className="navBut">
        Start Scouting
    </button>

  );
}

export function SettBut() {
  return(
    <button className="navBut">
      Settings
    </button>
  )
}

export function QrBut() {
  return(
    <button className="navBut">
      Scan QR
    </button>
  )
}

export function HistoryBut() {
  return(
   <button className="navBut">
        Match History
    </button>

  );
}

export function Nav() {
  return(
    <div className="row">
      <div className="left">
        <button className="navBut sNavBut">
          &lt;
        </button>
      </div>
      <div className="rigt">
        <button className="navBut sNavBut">
          &gt;
        </button>
      </div>
    </div>
  )
}
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

export default App;
