import "./index.css"
import { Score, Checkbox, Tally } from "./Functions"
import { NavIA } from "./App"

export function Active1Page() {
    return(
        <div className="screen">
            <div className="title">ACTIVE 1</div>
            <div className="subTitle">Fuel Scored</div>
            <Score
            vlar={"a1score"}/>
            <div className="spacer2"/>
            <div className="subTitle">Fuel Missed</div>
            <Score
            vlar={"a1miss"}/>
            <div className="spacer2"/>
            <div className="row">
                <div className="column">
                <div className="subTitle">Filled Outpost</div>
                <Checkbox
                vlar={"a1outp"}
                />
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Took Outpost</div>
                <Checkbox
                vlar={"a1take"}
                />
                </div>
            </div>
            <div className="row">
                <div className="column">
                <div className="subTitle">Breakdowns</div>
                <Tally
                vlar={"break"}/>
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Recoveries</div>
                <Tally
                vlar={"recover"}/>
                </div>
            </div>
            <NavIA lastlose={2} lastwin={4} nextwin={6} nextlose={4}/>
        </div>
    )
}

export function Active2Page() {
    return(
        <div className="screen">
            <div className="title">ACTIVE 2</div>
            <div className="subTitle">Fuel Scored</div>
            <Score
            vlar={"a2score"}/>
            <div className="spacer2"/>
            <div className="subTitle">Fuel Missed</div>
            <Score
            vlar={"a2miss"}/>
            <div className="spacer2"/>
            <div className="row">
                <div className="column">
                <div className="subTitle">Filled Outpost</div>
                <Checkbox
                vlar={"a2outp"}
                />
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Took Outpost</div>
                <Checkbox
                vlar={"a2take"}
                />
                </div>
            </div>
            <div className="row">
                <div className="column">
                <div className="subTitle">Breakdowns</div>
                <Tally
                vlar={"break"}/>
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Recoveries</div>
                <Tally
                vlar={"recover"}/>
                </div>
            </div>
            <NavIA nextlose={6} nextwin={7} lastlose={4} lastwin={6}/>
        </div>
    )
}