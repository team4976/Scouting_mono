import "./index.css"
import { CheckboxG, TallyB, Last, Next} from "./App"

export function Inactive2(){
    return (
        <div className="screen">
             <div className="title">
                  Inactive 2
                </div>
                  <div className="row">
            
                    <div className="spacer1">
                      <div className="column">
                        Defend 
                        <CheckboxG></CheckboxG>
                      </div>
                    </div>
            
                    <div className="spacer1">
                      <div className="column">
                      Fill
                      <CheckboxG></CheckboxG>
                      </div>
                    </div>
            
                  </div>
            
              <div className="spacer2">
                <div className="row">
            
                  <div className="spacer1">
                    <div className="column">
                      Collect Fuel 
                      <CheckboxG></CheckboxG>
                  </div>
                </div>
            
                  <div className="spacer1">
                    <div className="column">
                      Move Fuel 
                      <CheckboxG></CheckboxG>
                    </div>
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
                                                                          <Last last={5}></Last>
                                                                        <div className="spacer1">
                                                                          <Next next={7}></Next>
                                                                        </div>
                                                                      </div>
        </div>
    )
}