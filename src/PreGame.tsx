import "./index.css"
import { TextBox, TeamBox, Checkbox } from "./Functions"
import { Nav } from "./App"

export function PrePage() {
    return(
        <div className="screen">
            <div className="title">PRE-GAME</div>
                  <TextBox/>
                  <TextBox/>
                  <div className="subTitle">Team Color</div>
                  <TeamBox/>
                  <div className="subTitle">No Show</div>
                  <Checkbox/>
                  <Nav/>
        </div>
    )
}