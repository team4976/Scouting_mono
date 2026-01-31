import { Nav } from "./App"
import { vlars, ClearData } from "./Functions"

export function GenPage () {
    return(
        <div className="screen">
            this is the gen page ill put some cool stuff here like the results <br/>
            results: <br/>
            <ClearData/>
            <Nav next={0} last={8}/>
        </div>
    )
}