import "./index.css"
import { TallyB, CheckboxC} from "./functions"
import{Last, Next} from "./App"

export function Postgame(){
    return (
        <div className="screen">
            <div className="title">
      Post-Game
    </div>

      <div className="spacer2">
        <div className="column">
          <div className="subTitle">
                       Fouls
                      </div> 
          <TallyB></TallyB>
        </div>
      </div>

      <div className="spacer2">
        <div className="column">
         <div className="subTitle">
                       Cards
                      </div>
        <CheckboxC></CheckboxC>
        </div>
      </div>
       <div className="row">
                                                              <Last last={7}></Last>
                                                            <div className="spacer1">
                                                              <Next next={9}></Next>
                                                            </div>
                                                          </div>
        </div>
    )
}