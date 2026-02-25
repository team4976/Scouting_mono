import "./index.css"
import { TextBox, TeamBox, Checkbox } from "./Functions"
import { Nav } from "./App"

export function PrePage() {
    return(
        <div className="screen">
            <div className="title">PRE-GAME</div>
            <div className="subTitle">Team #</div>
            <TextBox vlar={"teamno"} tip={"Team #"} max={200000}/>
            <div className="subTitle">Match #</div>
            <TextBox vlar={"matchno"} tip={"Match #"} max={127}/>
            <div className="subTitle">Team Color</div>
            <TeamBox/>
            <div className="subTitle">No Show</div>
            <Checkbox vlar={"noshow"}/>
            <Nav last={0} next={2}/>
        </div>
    )
}