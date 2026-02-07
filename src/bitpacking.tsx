import "./index.css"
import { sdat } from "./functions"

    const telescore=sdat.act1score+sdat.act2score
    const telemiss=sdat.act1miss+sdat.act2miss

 
        if (sdat.autofailed==true){
            autoclm={4}
        }

        if (sdat.autoclimbdown==true){
            autoclm={3}
        }

        if (sdat.autoclimb==true){
            autoclm={2}
        }

        if (sdat.autoclimb==false){
            autoclm={1}
        }

export function PackBits(){

    const Bits=new Uint8Array(10)
    Bits[0]=(((Number(sdat.color)) & 0x01) >>7)|(((Number(sdat.teamnum)&0x1F))>>2)|(((Number(sdat.noshow))& 0x01)>>1)|(((Number(sdat.autofcollect))& 0x01))
    Bits[1]=(((Number(sdat.matchnum))& 0x07F)>>1)|(((Number(sdat.autocollecto)& 0x01)))
    Bits[2]=(((Number(sdat.autoscore))&0x03F)>>2)|(((Number(autoclm))&0x04))
    Bits[3]=(((Number(sdat.automiss))&0x00F)>>4)|(((Number(sdat.autocollectd))&0x01)>>3)|(((Number(sdat.autofcollect))&0x01)>>2)|(((Number(sdat.autocollecto))&0x01)>>1)|(((Number(sdat.act1fillo))&0x01)>>1)|(((Number(sdat.act1fillo))&0x01))
    Bits[4]=(((Number(telescore))&0x0FF))
    Bits[5]=(((Number(telemiss))&0x07F)>>1)|(((Number(sdat.act2fillo))&0x01))
    Bits[6]=(((Number(sdat.inact1fillo))&0x01)>>7)|(((Number(sdat.inact2fillo))&0x01)>>6)|(((Number(sdat.inact1fmove))&0x01)>>5)|(((Number(sdat.inact2fmove))&0x01)>>4)|(((Number(sdat.endclim))&0x003)>>2)|(((Number(sdat.ycard))&0x01)>>1)|(((Number(sdat.fall))&0x01))
    Bits[7]=(((Number(sdat.rcard))&0x01)>>7)|(((Number(sdat.fouls))&0x03F)>>1)|(((Number(sdat.act2takeo))&0x01))
    Bits[8]=(((Number(sdat.breakdown))&0x010)>>4)|(((Number(sdat.recovery))&0x010))
    Bits[9]=(((Number(sdat.sid))&0x03F)>>2)|(((Number(sdat.inact1def))&0x01)>>1)|(((Number(sdat.inact2def))&0x01))

    const packbits=()=>{
    console.log ("Hello World")
}
return(
<div className="screen">
    <button className="navBut"
    onClick={packbits}
    >packbits</button>
</div>
)
}