import "./index.css"
import {Tally, CheckboxG, TallyB, Last, Next} from "./App"

export function Active1(){
    return (
        <div className="screen">
              <div className="title">
                  Active 1
                </div>
            
                  <div className="spacer2">
                    <div className="column">
                      Fuel Scored
                      <Tally></Tally>
                    </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                      Fuel Missed
                      <Tally></Tally>
                    </div>
                  </div>
            
                    <div className="row">
                      <div className="spacer1">
                        <div className="column">
                          Outpost Fill
                          <CheckboxG></CheckboxG>
                        </div>
                      </div>
            
                      <div className="spacer1">
                        <div className="column">
                          Outpost Take
                          <CheckboxG></CheckboxG>
                        </div>
                      </div>
            
                    </div>
            
                    <div className="spacer2">
                    <div className="column">
                      Breakdown 
                      <TallyB></TallyB>
                   </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                    Recovery 
                    <TallyB></TallyB>
                    </div>
                  </div>
                   <div className="row">
                                      <Last last={2}></Last>
                                    <div className="spacer1">
                                      <Next next={4}></Next>
                                    </div>
                                  </div>
            
        </div>
    )
}