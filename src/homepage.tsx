import "./index.css"
import { Startbut, Setbut, Histbut } from "./App"

export function Homepage(){
   return( 
    <div className="screen">
        <div className="title">
        Home Page
        </div>
        <Startbut></Startbut>
        <Setbut></Setbut>
        <Histbut></Histbut>
    </div>
   )
}