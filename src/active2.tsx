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
                      <Tally max={256} sd={"act2score"}></Tally>
                    </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                      <div className="subTitle">
                        Fuel Missed
                      </div>
                      <Tally max={128} sd={"act2miss"}></Tally>
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
                      <TallyB max={15} sd={"breakdown"}></TallyB>
                   </div>
                  </div>
            
                  <div className="spacer2">
                    <div className="column">
                    <div className="subTitle">
                        Recovery
                      </div> 
                    <TallyB max={15} sd={"recovery"}></TallyB>
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