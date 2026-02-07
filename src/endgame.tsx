import "./index.css"
import { CheckboxG, TallyB, CheckboxCl} from "./functions"
import{Last, Next} from "./App"

export function Endgame(){
    return (
        <div className="screen">
            <div className="title">
                Endgame
              </div>
            
              
                  <div className="column">
                   <div className="subTitle">
                        Climb
                      </div>
                  </div>
            
                  
                    <CheckboxCl></CheckboxCl>
                 
      

            
                  <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Breakdown
                      </div> 
                      <TallyB sd={"breakdown"}></TallyB>
                   </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                    <div className="subTitle">
                        Recovery
                      </div>
                    <TallyB sd={"recovery"}></TallyB>
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