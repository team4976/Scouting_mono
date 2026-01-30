import "./index.css"
import {Tally, CheckboxG,TallyB, Last, Next} from "./App"

export function AutoTrans() {
    return(
        <div className="screen">
            <div className="title">
                    Auto/Trans
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
            
            
                      <div className="spacer2">
                       <div className="row">
                        <div className="spacer1">
                          <div className="column">
                          Climb
                          <CheckboxG></CheckboxG>
                          </div>
                        </div>
            
                        <div className="spacer1">
                          <div className="column">
                            Fail
                            <CheckboxG></CheckboxG>
                          </div>
                        </div>
            
                       </div>
                      </div>
            
            
                    <div className="spacer2">
                      <div className="row">
            
                        <div className="spacer1">
                          <div className="column">
                            Fuel
                            <CheckboxG></CheckboxG>
                          </div>
                        </div>
            
                        <div className="spacer1">
                          <div className="column">
                            Outpost
                            <CheckboxG></CheckboxG>
                          </div>
                        </div>
            
                        <div className="spacer1">
                          <div className="column">
                            Depot
                            <CheckboxG></CheckboxG>
                          </div>
                        </div>
            
                      </div>
                    </div>
            
                      <div className="column">
                        Climb Off
                        <CheckboxG></CheckboxG>
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
                                      <Last last={1}></Last>
                                    <div className="spacer1">
                                      <Next next={3}></Next>
                                      </div>
        </div>
        </div>

    )
}