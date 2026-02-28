import "./index.css"
import { Score, Checkbox, Tally, ClimbBox } from "./Functions"
import { NavIA } from "./App"

export function EndPage() {
    return(
        <div className="screen">
            <div className="title">END GAME</div>
            <div className="column">
                <div className="subTitle">Fuel Scored</div>
                <Score
                vlar={"endscore"}
                max={94}/>
            </div>
            <div className="spacer1"/>
            <div className="column">
                <div className="subTitle">Fuel Missed</div>
                <Score
                vlar={"endmiss"}
                max={42}/>
            </div>
            <div className="subTitle">Climb</div>
            <div className="row">
                <ClimbBox/>
            </div>
            <div className="row">
                <div className="column">
                <div className="subTitle">Breakdowns</div>
                <Tally
                vlar={"break"}
                max={15}/>
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Recoveries</div>
                <Tally
                vlar={"recover"}
                max={15}/>
                </div>
            </div>
            <NavIA lastlose={6} lastwin={5} nextwin={8} nextlose={8}/>
        </div>
    )
}