import "./index.css"
import { HomeBut } from "./App"
import { history } from "./Functions"
import Barcode from "react-barcode"
import { genCodeValueEX } from "./BitPacking"
export function HistoryPage() {
    const genCodeValue = (i) => {
        if (history[i] == undefined) {
            return("0000000000")
        } else {
            return(genCodeValueEX(JSON.parse(history[i])))
        }
    }
    const genMatchValue = (i) => {
        if (history[i] == undefined) {
            return("NA")
        } else {
            let varobj = JSON.parse(history[i])
            return(varobj.matchno)
        }
    }

    const genTeamValue = (i) => {
        if (history[i] == undefined) {
            return("NA")
        } else {
            let varobj = JSON.parse(history[i])
            return(varobj.teamno)
        }
    }
    return(
        <div className="screen">
            History Page
            <div className="row">
                <div className="tableobj"><Barcode value={genCodeValue(0)} displayValue={true} width={1.2} height={50}/></div>
                <div className="tableobj">Match #: {genMatchValue(0)}</div>
                <div className="tableobj">Team #: {genTeamValue(0)}</div>
            </div>
            <div className="row">
                <div className="tableobj"><Barcode value={genCodeValue(1)} displayValue={true} width={1.2} height={50}/></div>
                <div className="tableobj">Match #: {genMatchValue(1)}</div>
                <div className="tableobj">Team #: {genTeamValue(1)}</div>
            </div>
            <div className="row">
                <div className="tableobj"><Barcode value={genCodeValue(2)} displayValue={true} width={1.2} height={50}/></div>
                <div className="tableobj">Match #: {genMatchValue(2)}</div>
                <div className="tableobj">Team #: {genTeamValue(2)}</div>
            </div>
            <div className="row">
                <div className="tableobj"><Barcode value={genCodeValue(3)} displayValue={true} width={1.2} height={50}/></div>
                <div className="tableobj">Match #: {genMatchValue(3)}</div>
                <div className="tableobj">Team #: {genTeamValue(3)}</div>
            </div>
            <div className="row">
                <div className="tableobj"><Barcode value={genCodeValue(4)} displayValue={true} width={1.2} height={50}/></div>
                <div className="tableobj">Match #: {genMatchValue(4)}</div>
                <div className="tableobj">Team #: {genTeamValue(4)}</div>
            </div>
            <HomeBut reset={false}/>
        </div>
    )
}