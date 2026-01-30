import "./index.css";
import { Score, Checkbox } from "./Functions";
import { Nav } from "./App";

export function AutoTransPage() {
    return(
        <div className="screen">
            <div className="title">AUTO/TRANSITION</div>
            <div className="subTitle">Fuel Scored</div>
            <Score
            vlar={"autoScore"}/>
            <div className="subTitle">Fuel Missed</div>
            <Score
            vlar={"autoMiss"}/>
            <div className="spacer2"/>
            <div className="subTitle">Fuel Collection</div>
            <div className="row">
                <div className="column">
                    <div className="subTitle">Collect Outpost</div>
                    <Checkbox
                    vlar={"autooutp"}
                    />
                </div>
                <div className="spacer1"/>
                <div className="column">
                    <div className="subTitle">Move Fuel</div>
                    <Checkbox
                    vlar={"autocollect"}
                    />
                </div>
                <div className="spacer1"/>
                <div className="column">
                    <div className="subTitle">Collect Depot</div>
                    <Checkbox
                    vlar={"autodepo"}
                    />
                </div>
            </div>
            <div className="spacer2"/>
            <div className="subTitle">Climbing</div>
            <div className="row">
                <div className="column">
                    <div className="subTitle">Climbed</div>
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
                  <div className="subTitle">Failed</div>
                  <Checkbox
                  vlar={"autofailed"}/>
                </div>
            </div>
            <div className="subTitle">Win Auto</div>
            <Checkbox
            vlar={"autowin"}
            />
            <Nav last={1} next={3}/>
        </div>
    )
}