import "./index.css"
import {Textbox, CheckboxT, CheckboxG} from "./functions"
import{Last, Next} from "./App"

export function Pregame(){
    return(
        <div className="screen">
            <div className="title">
                    Pre-Game
                  </div>
                        <Textbox sd={"teamnum"} tip={"Team #"}></Textbox>
                        <Textbox sd={"matchnum"} tip={"Match #"}></Textbox>
            
                        <div className="spacer2">
                            <div className="subTitle">
                        Team Colour
                      </div>
                          <CheckboxT sd={"color"}></CheckboxT>
                        </div>
                        
                        <div className="spacer2">
                          <div className="column">
                           <div className="subTitle">
                        No Show
                      </div>
                            <CheckboxG sd={"noshow"}></CheckboxG>
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