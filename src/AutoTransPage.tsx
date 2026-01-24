import "./index.css";
import { Score, Checkbox } from "./Functions";
import { Nav } from "./App";

export function AutoTransPage() {
    return(
        <div className="screen">
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
            <Nav last={1} next={3}/>
        </div>
    )
}