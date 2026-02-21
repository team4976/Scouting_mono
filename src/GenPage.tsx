import { Nav, HomeBut, Back } from "./App"
import { useMemo } from "react"
import { vlars, ClearData} from "./Functions"
import { genCodeValue, PackBits } from "./BitPacking"
import Barcode from "react-barcode"

export function GenPage () {
    const barcodeValue = useMemo(() => {
    return genCodeValue();
    }, [vlars]);
    return(
        <div className="screen">
            <Barcode 
                value={barcodeValue}
                displayValue={true}
                width={1.2}
                height={50}
            />
            <br/>
            <ClearData/>
            <PackBits/>
            <Back/>
            <HomeBut reset={true}/>
        </div>
    )
}