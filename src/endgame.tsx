import "./index.css"
import { CheckboxG, TallyB, Last, Next } from "./App"

export function Endgame(){
    return (
        <div className="screen">
            <div className="title">
                Endgame
              </div>
            
                <div className="spacer2">
                  <div className="column">
                    Climb
                  </div>
                  </div>
            
                  <div className="row">
            
                    <div className="spacer1">
                      <div className="column">
                        L1
                        <CheckboxG></CheckboxG>
                      </div>
                    </div>
            
                    <div className="spacer1">
                      <div className="column">
                        L2 
                        <CheckboxG></CheckboxG>
                     </div>
                    </div>
            
                    <div className="spacer1">
                      <div className="column">
                        L3
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
                                                                          <Last last={6}></Last>
                                                                        <div className="spacer1">
                                                                          <Next next={8}></Next>
                                                                        </div>
                                                                      </div>
        </div>
        
    )
}