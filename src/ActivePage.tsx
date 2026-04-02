import "./index.css"
import { Score, Checkbox, Tally } from "./Functions"
import { NavIA } from "./App"

export function Active1Page() {
    return(
        <div className="screen">
            <div className="title">ACTIVE 1</div>
            <div className="subTitle">Fuel Scored</div>
            <Score
            vlar={"a1score"}
            max={170}
            />
            <div className="spacer2"/>
            <div className="row">
                <div className="column">
                     <div className="subTitle">Defend</div>
                    <Checkbox
                        vlar={"a1defend"}>
                    </Checkbox>
                </div>
                </div>
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
                vlar={"break"}
                max={15}
                />
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Recoveries</div>
                <Tally
                vlar={"recover"}
                max={15}/>
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
            vlar={"a2score"}
            max={170}
            />
            <div className="spacer2"/>
              <div className="row">
                <div className="column">
                     <div className="subTitle">Defend</div>
                    <Checkbox
                        vlar={"a2defend"}>
                    </Checkbox>
                </div>
                </div>
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
                vlar={"break"}
                max={15}
                />
                </div>
                <div className="spacer1"/>
                <div className="column">
                <div className="subTitle">Recoveries</div>
                <Tally
                vlar={"recover"}
                max={15}/>
                </div>
            </div>
            <NavIA nextlose={6} nextwin={7} lastlose={4} lastwin={6}/>
        </div>
    )
}