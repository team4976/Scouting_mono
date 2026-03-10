import { HomeBut, Back } from "./App"
import { genCodeValue } from "./BitPacking"
import Barcode from "react-barcode"

export function GenPage () {
    const barcodeValue = genCodeValue();
    return(
        <div className="screen">
            <Barcode 
                value={barcodeValue}
                displayValue={true}
                width={1.2}
                height={50}
            />
            <br/>
            {/**<ClearData/>
            <PackBits/>**/}
            <Back/>
            <HomeBut reset={true}/>
        </div>
    )
}
