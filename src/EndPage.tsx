import "./index.css"
import { Score, Checkbox, Tally } from "./Functions"
import { Nav } from "./App"

export function EndPage() {
    return(
        <div className="screen">
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
        </div>
    )
}