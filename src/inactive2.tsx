import "./index.css"
import { CheckboxG, TallyB} from "./functions"
import{Last, Next} from "./App"

export function Inactive2(){
    return (
        <div className="screen">
             <div className="title">
                  Inactive 2
                </div>
                  <div className="row">
                    <div className="spacer1">

                      <div className="subTitle">
                        Fuel
                      </div>
            <div className="row">
                    <div className="spacer1">
                      <div className="column">
                      Fill Outpost
                      <CheckboxG sd={"inact2fillo"}></CheckboxG>
                      </div>
                    </div>

                    <div className="spacer1">
                    <div className="column">
                      Collect Fuel 
                      <CheckboxG sd={"inact2fcollect"}></CheckboxG>
                  </div>
                </div>
            
                  <div className="spacer1">
                    <div className="column">
                      Move Fuel 
                      <CheckboxG sd={"inact2fmove"}></CheckboxG>
                    </div>
                  </div>

                  </div>
            
                  </div>
                  </div>
            
            
              <div className="spacer2">
                    <div className="column">
                     <div className="subTitle">
                        Breakdown
                      </div>
                      <TallyB></TallyB>
                   </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                    <div className="subTitle">
                        Recovery
                      </div>
                    <TallyB></TallyB>
                    </div>
                  </div>

                  
              <div className="spacer2">
              <div className="column">
                       <div className="subTitle">
                        Defend
                      </div>
                        <CheckboxG sd={"inact2def"}></CheckboxG>
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