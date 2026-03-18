import "./index.css"
import { TeamBox, Checkbox, TeamNumberField } from "./Functions"
import { Nav } from "./App"

export function PrePage() {
    return(
        <div className="screen">
            <div className="title">PRE-GAME</div>
            <TeamNumberField/>
            <div className="subTitle">Team Color</div>
            <TeamBox/>
            <div className="subTitle">No Show</div>
            <Checkbox vlar={"noshow"}/>
            <Nav last={0} next={2}/>
        </div>
    )
}