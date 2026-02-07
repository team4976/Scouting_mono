import "./index.css"
import {Tally, CheckboxG, TallyB} from "./functions"
import{Last, Next} from "./App"

export function Active2(){
    return (
        <div className="screen">
              <div className="title">
                  Active 2
                </div>
            
                   <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Fuel Scored
                      </div>
                      <Tally sd={"act2score"}></Tally>
                    </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Fuel Missed
                      </div>
                      <Tally sd={"act2miss"}></Tally>
                    </div>
                  </div>

                    <div className="subTitle">
                      Outpost
                    </div>
           
                    <div className="row">
                      <div className="spacer1">
                        <div className="column">
                         Fill
                          <CheckboxG sd={"act2fillo"}></CheckboxG>
                        </div>
                      </div>
            
                      <div className="spacer1">
                        <div className="column">
                         Take
                          <CheckboxG sd={"act2takeo"}></CheckboxG>
                        </div>
                      </div>
            
                    </div>
            
                    <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Breakdown
                      </div>
                      <TallyB sd={"a2breakdown"}></TallyB>
                   </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                    <div className="subTitle">
                        Recovery
                      </div> 
                    <TallyB sd={"a2recovery"}></TallyB>
                    </div>
                  </div>

                   <div className="row">
                                                                          <Last last={4}></Last>
                                                                        <div className="spacer1">
                                                                          <Next next={6}></Next>
                                                                        </div>
                                                                      </div>
            
        </div>
    )
}