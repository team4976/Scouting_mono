import "./index.css"
import {Textbox, CheckboxT, CheckboxG, Last, Next} from "./App"


export function Pregame(){
    return(
        <div className="screen">
            <div className="title">
                    Pre-Game
                  </div>
                        <Textbox></Textbox>
                        <Textbox></Textbox>
            
                        <div className="spacer2">
                            Team Colour
                          <CheckboxT></CheckboxT>
                        </div>
                        
                        <div className="spacer2">
                          <div className="column">
                            No Show
                            <CheckboxG></CheckboxG>
                          </div>
                        </div>
                <div className="row">
                    <Last last={0}></Last>
                  <div className="spacer1">
                    <Next next={2}></Next>
                  </div>
                </div>
        </div>
    )
}