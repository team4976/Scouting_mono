import "./index.css"
import { Score, Checkbox, Tally } from "./Functions"
import { Nav } from "./App"

export function Active1Page() {
    return(
        <div className="screen">
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
            <Nav last={2} next={4}/>
        </div>
    )
}

export function Active2Page() {
    return(
        <div className="screen">
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
            <Nav last={4} next={6}/>
        </div>
    )
}