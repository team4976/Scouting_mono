import "./index.css"
import {Tally, CheckboxG, TallyB} from "./functions"
import{Last, Next} from "./App"

export function Active1(){
    return (
        <div className="screen">
              <div className="title">
                  Active 1
                </div>
            
                  <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Fuel Scored
                      </div>
                      <Tally sd={"act1score"}></Tally>
                    </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Fuel Missed
                      </div>
                      <Tally sd={"act1miss"}></Tally>
                    </div>
                  </div>
               
                    <div className="subTitle">
                      Outpost
                    </div>
  
                    
                    <div className="row">
                      <div className="spacer1">
                        <div className="column">
                         Fill
                          <CheckboxG sd={"act1fillo"}></CheckboxG>
                        </div>
                      </div>
            
                      <div className="spacer1">
                        <div className="column">
                         Take
                          <CheckboxG sd={"act1takeo"}></CheckboxG>
                        </div>
                      </div>
            
                    </div>
            
                    <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Breakdown
                      </div>
                      <TallyB sd={"a1breakdown"}></TallyB>
                   </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                    <div className="subTitle">
                        Recovery
                      </div> 
                    <TallyB sd={"a1recovery"}></TallyB>
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