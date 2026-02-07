import { Nav } from "./App"
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
            <Barcode value={barcodeValue}/>
            <br/>
            <ClearData/>
            <PackBits/>
            <Nav next={0} last={8}/>
        </div>
    )
}