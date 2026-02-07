import "./index.css"
import {Tally, CheckboxG,TallyB, CheckboxCl} from "./functions"
import{Last, Next} from "./App"


export function AutoTrans() {
    return(
        <div className="screen">
            <div className="title">
                    Auto/Trans
                  </div>
    
                        <div className="spacer2">
                          <div className="column">
                            <div className="subTitle">
                        Fuel Scored
                      </div>
                            <Tally sd={"autoscore"}></Tally>
                            </div>
                        </div>
            
                        <div className="spacer2">
                          <div className="column">
                           <div className="subTitle">
                        Fuel Missed
                      </div>
                            <Tally sd={"automiss"}></Tally>
                          </div>
                        </div>
            
            
                      <div className="spacer2">
                        <div className="subTitle">
                        Climb
                      </div>
                       <div className="row">
                        <div className="spacer1">
                          <div className="column">
                          Climb
                          <CheckboxG sd={"autoclimb"}></CheckboxG>
                          </div>
                        </div>
            
                        <div className="spacer1">
                          <div className="column">
                            Fail
                            <CheckboxG sd={"autofailed"}></CheckboxG>
                          </div>
                        </div>
            
                       </div>
                      </div>
            
            
                    <div className="spacer2">
                      <div className="subTitle">
                        Collection
                      </div>
                      <div className="row">
            
                        <div className="spacer1">
                          
                          <div className="column">
                            Fuel
                            <CheckboxG sd={"autofcollect"}></CheckboxG>
                          </div>
                        </div>
            
                        <div className="spacer1">
                          <div className="column">
                            Outpost
                            <CheckboxG sd={"autocollecto"}></CheckboxG>
                          </div>
                        </div>
            
                        <div className="spacer1">
                          <div className="column">
                            Depot
                            <CheckboxG sd={"autocollectd"}></CheckboxG>
                          </div>
                        </div>
            
                      </div>
                    </div>
            
                     
            
                      <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Breakdown
                      </div> 
                      <TallyB sd={"autobreakdown"}></TallyB>
                   </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                    <div className="subTitle">
                        Recovery
                      </div>
                    <TallyB sd={"autorecovery"}></TallyB>
                    </div>
                  </div>

                      <div className="column">
                        <div className="subTitle">
                        Climb Down
                      </div>
                        <CheckboxG sd={"autoclimbdown"}></CheckboxG>
                      </div>
                      <div className="spacer2">
                        
                      <div className="column">
                        <div className="subTitle">Auto Win
                          </div>
                        <CheckboxG sd={"autowin"}></CheckboxG>
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