import "./index.css"
import { Checkbox, Tally } from "./Functions"
import { Nav } from "./App"

export function Inactive1Page(){
    return(
        <div className="screen">
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
            <Nav last={3} next={5}/>
        </div>
    )
}

export function Inactive2Page(){
    return(
        <div className="screen">
            <div className="title">INACTIVE 2</div>
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
            <Nav last={5} next={7}/>
        </div>
    )
}