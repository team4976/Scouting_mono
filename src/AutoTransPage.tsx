import "./index.css";
import { Score, Checkbox, Tally } from "./Functions";
import { NavIA } from "./App";

export function AutoTransPage() {
    return(
        <div className="screen">
            <div className="title">AUTO/TRANSITION</div>
            <div className="subTitle">Fuel Scored</div>
            <Score
            max={127}
            vlar={"autoscore"}/>
            <div className="spacer2"/>
            <div className="subTitle">Collection</div>
            <div className="row">
                
                <div className="spacer1"/>
                <div className="column">
                    <div className="subTitle">Depot</div>
                    <Checkbox
                    vlar={"autodepo"}
                    />
                    </div>
                
                <div className="spacer1"/>
                <div className="column">
                    <div className="subTitle">Neutral</div>
                    <Checkbox
                    vlar={"autocollect"}
                    />
                </div>

                 <div className="spacer1"/>
                <div className="column">
                    <div className="subTitle">Outpost</div>
                    <Checkbox
                    vlar={"autooutp"}
                    />
                    </div>
            </div>
  
            <div className="spacer2"/>
            <div className="subTitle">Climbing</div>
            <div className="row">
                <div className="column">
                    <div className="subTitle">Climb</div>
                    <Checkbox
                    vlar={"autoclimb"}
                    />
                </div>
                <div className="spacer1"/>
                <div className="column">
                    <div className="subTitle">Got Down</div>
                    <Checkbox
                    vlar={"autodown"}
                    />
                </div>
                <div className="spacer1"/>
                <div className="column">
                  <div className="subTitle">Fail</div>
                  <Checkbox
                  vlar={"autofailed"}/>
                </div>
            </div>
            
            <div className="row">
                <div className="column">
                <div className="subTitle">Breakdowns</div>
                <Tally
                max={15}
                vlar={"break"}/>
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Recoveries</div>
                <Tally
                max={15}
                vlar={"recover"}/>
                </div>
            </div>

            <div className="subTitle">Win Auto</div>
            <Checkbox
            vlar={"autowin"}
            />
            
            <NavIA lastlose={1} lastwin={1} nextlose={3} nextwin={4}/>
        </div>
    )
}