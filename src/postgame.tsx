import "./index.css"
import { TallyB, CheckboxC, Last, Next } from "./App"

export function Postgame(){
    return (
        <div className="screen">
            <div className="title">
      Post-Game
    </div>

      <div className="spacer2">
        <div className="column">
          Fouls 
          <TallyB></TallyB>
        </div>
      </div>

      <div className="spacer2">
        <div className="column">
        Cards 
        <CheckboxC></CheckboxC>
        </div>
      </div>
       <div className="row">
                                                              <Last last={7}></Last>
                                                            <div className="spacer1">
                                                              <Next next={8}></Next>
                                                            </div>
                                                          </div>
        </div>
    )
}