import "./index.css"
import { Score, Checkbox, Tally, ClimbBox } from "./Functions"
import { Nav } from "./App"

export function EndPage() {
    return(
        <div className="screen">
            <div className="title">END GAME</div>
            <div className="column">
                <div className="subTitle">Fuel Scored</div>
                <Score
                vlar={"endscore"}/>
            </div>
            <div className="spacer1"/>
            <div className="column">
                <div className="subTitle">Fuel Missed</div>
                <Score
                vlar={"endmiss"}/>
            </div>
            <div className="subTitle">Climb</div>
            <div className="row">
                <ClimbBox/>
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
            <Nav last={6} next={8}/>
        </div>
    )
}