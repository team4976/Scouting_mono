import { vlars } from "./Functions"

export function PackBits() {
  const testVal = () => {
    vlars.color = true
    vlars.teamno = "15"
    vlars.noshow = true
    vlars.autocollect = false

    vlars.matchno = "50"
    vlars.autooutp = true

    vlars.autoscore = 52
    vlars.autoclimb = true

    vlars.automiss = 2
    vlars.autodepo = true
    vlars.autocollect = false
    vlars.a1outp = true
    vlars.a1take = false

    vlars.a1score = 54
    vlars.a2score = 99
    vlars.endscore = 23

    vlars.a1miss = 40
    vlars.a2miss = 31
    vlars.endmiss = 16

    vlars.i1fill = true
    vlars.i2fill = false
    vlars.i1move = true
    vlars.i2move = false
    vlars.endclimb = 1
    vlars.yellow = false
    vlars.fall = true

    vlars.red = true
    vlars.fouls = 42
    vlars.a2outp = false

    vlars.break = 7
    vlars.recover = 8

    vlars.sid = 24
    vlars.i1def = true
    vlars.i2def = false
    console.log(vlars)
  }
  
  const packBits = () => {
    let autoclm
    if (vlars.autoclimb == true) {
      if (vlars.autodown == true) {
        autoclm = 3
      } else if (vlars.autofailed == true){
        autoclm = 2
      } else {
        autoclm = 1
      }
    } else {
      autoclm = 0
    }
    let telescore = vlars.a1score + vlars.a2score + vlars.endscore
    let telemiss = vlars.a1miss + vlars.a2miss + vlars.endmiss

    const Bits = new Uint8Array(10)
    Bits[0] = (((Number(vlars.color) & 0x01) << 7) | ((Number(vlars.teamno) & 0x1F) << 2) | ((Number(vlars.noshow) & 0x01) << 1) | (Number(vlars.autocollect) & 0x01))
    Bits[1] = (((Number(vlars.matchno) & 0x007f) << 1) | (Number(vlars.autooutp) & 0x01))
    Bits[2] = (((Number(vlars.autoscore) & 0x003f) << 2) | (Number(autoclm) & 0x003))
    Bits[3] = (((Number(vlars.automiss) & 0x00f) << 4) | ((Number(vlars.autodepo) & 0x001) << 3) | ((Number(vlars.autocollect) & 0x001) << 2) |((Number(vlars.a1take) & 0x001) << 1) | (Number(vlars.a1outp) & 0x001))
    Bits[4] = (Number(telescore) & 0x00ff)
    Bits[5] = (((Number(telemiss) & 0x007f) << 1) | (Number(vlars.a2outp) & 0x001))
    Bits[6] = (((Number(vlars.i1fill) & 0x001) << 7) | ((Number(vlars.i2fill) & 0x001) << 6) | ((Number(vlars.i1move) & 0x001) << 5) | ((Number(vlars.i2move) & 0x001) << 4) | ((Number(vlars.endclimb) & 0x003) << 2) | ((Number(vlars.yellow) & 0x001) << 1) | (Number(vlars.fall) & 0x0001))
    Bits[7] = (((Number(vlars.red) & 0x001) << 7) | ((Number(vlars.fouls) & 0x003f) << 1) | (Number(vlars.a2outp) & 0x001))
    Bits[8] = (((Number(vlars.break) & 0x000f) << 4) | (Number(vlars.recover) & 0x000f))
    Bits[9] = (((Number(vlars.sid) & 0x003f) << 2) | ((Number(vlars.i1def) & 0x001) << 1) | (Number(vlars.i2def) & 0x001))
    console.log(Bits)
    console.log(Bits[2].toString(16))
    let hexBits = []
    Bits.forEach((bit) => {
      hexBits.push(bit.toString(16))
    })
    const barData = hexBits.join("")
    console.log(hexBits)

  }
  return(
    <div>
      <button className="navBut" onClick={testVal}>
        Set test Vars
      </button>
      <button className="navBut" onClick={packBits}>
        Pack Bits
      </button>
    </div>
  )
}

const save = () => {
    localStorage.setItem("data", JSON.stringify(vlars))
    console.log("saved")
  }
  

export function genCodeValue() {
  let autoclm
    if (vlars.autoclimb == true) {
      if (vlars.autodown == true) {
        autoclm = 3
      } else if (vlars.autofailed == true){
        autoclm = 2
      } else {
        autoclm = 1
      }
    } else {
      autoclm = 0
  }
  let telescore = vlars.a1score + vlars.a2score + vlars.endscore
  let telemiss = vlars.a1miss + vlars.a2miss + vlars.endmiss
  const Bits = new Uint8Array(10)
  Bits[0] = (((Number(vlars.color) & 0x01) << 7) | ((Number(vlars.teamno) & 0x1F) << 2) | ((Number(vlars.noshow) & 0x01) << 1) | (Number(vlars.autocollect) & 0x01))
  Bits[1] = (((Number(vlars.matchno) & 0x007f) << 1) | (Number(vlars.autooutp) & 0x01))
  Bits[2] = (((Number(vlars.autoscore) & 0x003f) << 2) | (Number(autoclm) & 0x003))
  Bits[3] = (((Number(vlars.automiss) & 0x00f) << 4) | ((Number(vlars.autodepo) & 0x001) << 3) | ((Number(vlars.autocollect) & 0x001) << 2) |((Number(vlars.a1take) & 0x001) << 1) | (Number(vlars.a1outp) & 0x001))
  Bits[4] = (Number(telescore) & 0x00ff)
  Bits[5] = (((Number(telemiss) & 0x007f) << 1) | (Number(vlars.a2outp) & 0x001))
  Bits[6] = (((Number(vlars.i1fill) & 0x001) << 7) | ((Number(vlars.i2fill) & 0x001) << 6) | ((Number(vlars.i1move) & 0x001) << 5) | ((Number(vlars.i2move) & 0x001) << 4) | ((Number(vlars.endclimb) & 0x003) << 2) | ((Number(vlars.yellow) & 0x001) << 1) | (Number(vlars.fall) & 0x0001))
  Bits[7] = (((Number(vlars.red) & 0x001) << 7) | ((Number(vlars.fouls) & 0x003f) << 1) | (Number(vlars.a2outp) & 0x001))
  Bits[8] = (((Number(vlars.break) & 0x000f) << 4) | (Number(vlars.recover) & 0x000f))
  Bits[9] = (((Number(vlars.sid) & 0x003f) << 2) | ((Number(vlars.i1def) & 0x001) << 1) | (Number(vlars.i2def) & 0x001))
  console.log(Bits)
  console.log(Bits[2].toString(16))
  let hexBits = []
  Bits.forEach((bit) => {
    hexBits.push(bit.toString(16))
  })
  const barData = hexBits.join("")
  return(barData)
}