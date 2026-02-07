import "./index.css"
import { Checkbox, Tally } from "./Functions"
import { NavIA } from "./App"

export function Inactive1Page(){
    return(
        <div className="screen">
            <div className="title">INACTIVE 1</div>
            <div className="subTitle">Defend</div>
            <Checkbox
            vlar={"i1def"}/>
            <div className="spacer2"/>
            <div className="subTitle">Fuel</div>
            <div className="row">
                <div className="column">
                <div className="subTitle">Outpost Fill</div>
                <Checkbox
                vlar={"i1move"}
                />
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Move Fuel</div>
                <Checkbox
                vlar={"i1fill"}
                />
                </div>
            </div>
            <div className="row">
                <div className="column">
                <div className="subTitle">Breakdowns</div>
                <Tally
                vlar={"break"}/>
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Recoveries</div>
                <Tally
                vlar={"recover"}/>
                </div>
            </div>
            <NavIA lastlose={3} lastwin={2} nextlose={5} nextwin={3}/>
        </div>
    )
}

export function Inactive2Page(){
    return(
        <div className="screen">
            <div className="title">INACTIVE 2</div>
            <div className="subTitle">Defend</div>
            <Checkbox
            vlar={"i2def"}
            />
            <div className="spacer2"/>
            <div className="subTitle">Fuel</div>
            <div className="row">
                <div className="column">
                <div className="subTitle">Outpost Fill</div>
                <Checkbox
                vlar={"i2move"}
                />
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Move Fuel</div>
                <Checkbox
                vlar={"i2fill"}
                />
                </div>
            </div>
            <div className="row">
                <div className="column">
                <div className="subTitle">Breakdowns</div>
                <Tally
                vlar={"break"}
                />
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Recoveries</div>
                <Tally
                vlar={"recover"}/>
                </div>
            </div>
            <NavIA nextlose={7} nextwin={5} lastlose={5} lastwin={3}/>
        </div>
    )
}