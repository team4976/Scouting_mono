import "./index.css"
import { HomeBut } from "./App"
import { history, HistoryBarcode } from "./Functions"
import Barcode from "react-barcode"
import { genCodeValueEX } from "./BitPacking"
export function HistoryPage() {
    let barcodeArray = []
    let barcodeCards = []
    let barLit = false
    function isolateCode (index: number) {
        for (let i = 0; i < 4; i++) {
            let currentBarcode = barcodeArray[index]
            if (i == index) {
                currentBarcode.switchHighlighted()
                let highlighted = currentBarcode.isHighlighted
                if (highlighted) {
                    barLit = true
                } else {
                    barLit = false
                }
            } else {
                if (barLit) {
                    currentBarcode.visiblity = false
                } else {
                    currentBarcode.visiblity = true
                }
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        let newHistoryCode = new HistoryBarcode(i, isolateCode)
        barcodeArray.push(newHistoryCode)
        barcodeCards.push(newHistoryCode.barcodeElement)
    }
    return(
        <div className="screen">
            History Page
            {barcodeCards}
            <HomeBut reset={false}/>
        </div>
    )
}

{/*<button className="barcodeButton">
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
                <div className="row">
                    <div className="tableobj"><Barcode value={genCodeValue(0)} displayValue={false} width={1.2} height={50}/></div>
                    <div className="tableobj">Match #: {genMatchValue(0)}</div>
                    <div className="tableobj">Team #: {genTeamValue(0)}</div>
                </div>
            </button>
            <button className="barcodeButton">
                <div className="row">
                    <div className="tableobj"><Barcode value={genCodeValue(1)} displayValue={false} width={1.2} height={50}/></div>
                    <div className="tableobj">Match #: {genMatchValue(1)}</div>
                    <div className="tableobj">Team #: {genTeamValue(1)}</div>
                </div>
            </button>
            <button className="barcodeButton">
                <div className="row">
                    <div className="tableobj"><Barcode value={genCodeValue(2)} displayValue={false} width={1.2} height={50}/></div>
                    <div className="tableobj">Match #: {genMatchValue(2)}</div>
                    <div className="tableobj">Team #: {genTeamValue(2)}</div>
                </div>
            </button>
            <button className="barcodeButton">
                <div className="row">
                    <div className="tableobj"><Barcode value={genCodeValue(3)} displayValue={false} width={1.2} height={50}/></div>
                    <div className="tableobj">Match #: {genMatchValue(3)}</div>
                    <div className="tableobj">Team #: {genTeamValue(3)}</div>
                </div>
            </button>
            <button className="barcodeButton">
                <div className="row">
                    <div className="tableobj"><Barcode value={genCodeValue(4)} displayValue={false} width={1.2} height={50}/></div>
                    <div className="tableobj">Match #: {genMatchValue(4)}</div>
                    <div className="tableobj">Team #: {genTeamValue(4)}</div>
                </div>
            </button> */}