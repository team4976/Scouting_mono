import "./index.css"
import { TextBox, CardBox } from "./Functions"
import { Nav } from "./App"

export function PostPage () {
    return(
        <div className="screen">
            <div className="title">POST GAME</div>
            <TextBox vlar={"fouls"} tip={"Fouls"} max={63}/>
            <div className="spacer2"/>
            <div className="subTitle">Cards</div>
            <CardBox/>
            <Nav last={7} next={9}/>
        </div>
    )
}