import { Nav } from "./App"
import { vlars, ClearData, PackBits } from "./Functions"
import Barcode from "react-barcode"

export function GenPage () {
    return(
        <div className="screen">
            <Barcode value="hello worlds"/>
            this is the gen page ill put some cool stuff here like the results <br/>
            results: <br/>
            <ClearData/>
            <PackBits variables={vlars}/>
            <Nav next={0} last={8}/>
        </div>
    )
}