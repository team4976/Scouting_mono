import "./index.css"
import {Last, Next} from "./App"
import {sdat} from "./functions"

export function Data(){
    return(
        <div className="screen">
            <div className="title">
                Data
            </div>
             <div className="row">
                <Last last={8}></Last>
                <div className="spacer1">
                </div>
        </div>
        </div>
    )
}