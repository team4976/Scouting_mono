import "./index.css"
import {Last, Next} from "./App"
import {sdat} from "./functions"
import { PackBits } from "./bitpacking"
import Barcode from "react-barcode"

export function Data(){
    return(
        <div className="screen">
            <div className="title">
                Data
            </div>
            <Barcode></Barcode>
            <PackBits></PackBits>
             <div className="row">
                <Last last={8}></Last>
                <div className="spacer1">
                </div>
        </div>
        </div>
    )
}

