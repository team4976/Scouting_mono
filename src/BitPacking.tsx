import { vlars } from "./Functions"
const teamsDurham = ["188", "781", "1241", "2708", "3543", "4152", "4476", "4946", "4976", "5024", "5032", "5036", "5409", "5596", "5689", "5870", "6135", "7480", "7603", "7712", "7712", "7757", "7902", "8089", "8729", "9569", "9589", "10015", "11227"]
const teamsWaterloo = ["610", "772", "1334", "2200", "2386", "2609", "2702", "3683", "3756", "4308", "4617", "4678", "4917", "4940", "4946", "4976","5408", "5409", "5870", "5912", "6725", "6854", "6875", "6975","7058", "8089", "8764", "9098", "9263", "10514", "11227"]
{/**export function PackBits() {
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
    let hexBits = new Array
    Bits.forEach((bit) => {
      hexBits.push(bit.toString(16))
    })
    const barData = hexBits.join("")
    console.log(hexBits)

  }
  return(
    <div>
      <button className="navBut" onClick={testVal}>
        Test Data
      </button>
      <button className="navBut" onClick={packBits}>
        Pack Bits
      </button>
    </div>
  )
}**/}

const save = () => {
    localStorage.setItem("data", JSON.stringify(vlars))
    console.log("saved")
  }
  

export function genCodeValue() {
  let teamid
  let telemiss
  let setTeam = false
  teamsDurham.forEach((value, index) => {
    console.log(value)
    console.log(vlars.teamno)
  if (value == vlars.teamno){
    console.log(index)
    teamid = index
    setTeam = true
  }
})
if (!setTeam){
  console.log("You biffed it.")
  teamid = 31
}
  let autoclm
    if (vlars.autoclimb == true) {
      if (vlars.autodown == true) {
        autoclm = 3 //Climbed and got down
      } else if (vlars.autofailed == true){
        autoclm = 2 //Climbed and failed
      } else {
        autoclm = 1 //Just Climbed
      }
    } else {
      autoclm = 0 //nutin
  }
  let telescore = vlars.a1score + vlars.a2score + vlars.endscore
  if (telescore > 511){
    telescore = 511
  }
  telescore = Math.floor(telescore/2)
  let newautoscore = Math.floor(vlars.autoscore/2)
 const Bits = new Uint8Array(11)

Bits[0] = (((Number(vlars.color) & 0x01) << 7) |
           ((Number(teamid) & 0x1F) << 2) |
           ((Number(vlars.noshow) & 0x01) << 1) |
           (Number(vlars.autocollect) & 0x01))

Bits[1] = (((Number(vlars.matchno) & 0x7F) << 1) |
           (Number(vlars.autooutp) & 0x01))

Bits[2] = (((Number(newautoscore) & 0x3F) << 2) |
           (Number(autoclm) & 0x03))

Bits[3] = (((Number(vlars.automiss) & 0x0F) << 4) |
           ((Number(vlars.autodepo) & 0x01) << 3) |
           ((Number(vlars.autocollect) & 0x01) << 2) |
           ((Number(vlars.a1take) & 0x01) << 1) |
           (Number(vlars.a1outp) & 0x01))

Bits[4] = Number(telescore) & 0xFF

Bits[5] = (((Number(telemiss) & 0x7F) << 1) |
           (Number(vlars.a2outp) & 0x01))

Bits[6] = (((Number(vlars.i1fill) & 0x01) << 7) |
           ((Number(vlars.i2fill) & 0x01) << 6) |
           ((Number(vlars.i1move) & 0x01) << 5) |
           ((Number(vlars.i2move) & 0x01) << 4) |
           ((Number(vlars.endclimb) & 0x03) << 2) |
           ((Number(vlars.yellow) & 0x01) << 1) |
           (Number(vlars.fall) & 0x01))

Bits[7] = (((Number(vlars.red) & 0x01) << 7) |
           ((Number(vlars.fouls) & 0x3F) << 1) |
           (Number(vlars.a2outp) & 0x01))

Bits[8] = (((Number(vlars.break) & 0x0F) << 4) |
           (Number(vlars.recover) & 0x0F))

Bits[9] = (((Number(vlars.sid) & 0x3F) << 2) |
           ((Number(vlars.i1def) & 0x01) << 1) |
           (Number(vlars.i2def) & 0x01))

Bits[10] = Number(vlars.autowin) & 0xFF

function uint8ToBase64(uint8) {
  let binary = ""
  for (let i = 0; i < uint8.length; i++) {
    binary += String.fromCharCode(uint8[i])
  }
  console.log(vlars)
  console.log(Bits)
  return btoa(binary)
}

return (uint8ToBase64(Bits).replace("=", ""))
}

//Not needed i dont think
export function genCodeValueEX(value) {
  let teamid
  teamsDurham.forEach((values, index) => {
    console.log(values)
    console.log(value.teamno)
  if (values == value.teamno){
    console.log(index)
    teamid = index
  }
})
  let autoclm
    if (value.autoclimb == true) {
      if (value.autodown == true) {
        autoclm = 3 //Climbed and got down
      } else if (value.autofailed == true){
        autoclm = 2 // Climbed and failed to get down
      } else {
        autoclm = 1 // Climbed and didnt get down
      }
    } else {
      autoclm = 0 // Didnt climb
  }
  let telescore = value.a1score + value.a2score + value.endscore
  let telemiss = value.a1miss + value.a2miss + value.endmiss
  if (telemiss > 127){
    telemiss = 127
  }
 const Bits = new Uint8Array(11)

Bits[0] = (((Number(value.color) & 0x01) << 7) |
           ((Number(teamid) & 0x1F) << 2) |
           ((Number(value.noshow) & 0x01) << 1) |
           (Number(value.autocollect) & 0x01))

Bits[1] = (((Number(value.matchno) & 0x7F) << 1) |
           (Number(value.autooutp) & 0x01))

Bits[2] = (((Number(value.autoscore) & 0x3F) << 2) |
           (Number(autoclm) & 0x03))

Bits[3] = (((Number(value.automiss) & 0x0F) << 4) |
           ((Number(value.autodepo) & 0x01) << 3) |
           ((Number(value.autocollect) & 0x01) << 2) |
           ((Number(value.a1take) & 0x01) << 1) |
           (Number(value.a1outp) & 0x01))

Bits[4] = Number(telescore) & 0xFF

Bits[5] = (((Number(telemiss) & 0x7F) << 1) |
           (Number(value.a2outp) & 0x01))

Bits[6] = (((Number(value.i1fill) & 0x01) << 7) |
           ((Number(value.i2fill) & 0x01) << 6) |
           ((Number(value.i1move) & 0x01) << 5) |
           ((Number(value.i2move) & 0x01) << 4) |
           ((Number(value.endclimb) & 0x03) << 2) |
           ((Number(value.yellow) & 0x01) << 1) |
           (Number(value.fall) & 0x01))

Bits[7] = (((Number(value.red) & 0x01) << 7) |
           ((Number(value.fouls) & 0x3F) << 1) |
           (Number(value.a2outp) & 0x01))

Bits[8] = (((Number(value.break) & 0x0F) << 4) |
           (Number(value.recover) & 0x0F))

Bits[9] = (((Number(value.sid) & 0x3F) << 2) |
           ((Number(value.i1def) & 0x01) << 1) |
           (Number(value.i2def) & 0x01))

Bits[10] = Number(value.autowin) & 0xFF

function uint8ToBase64(uint8) {
  let binary = ""
  for (let i = 0; i < uint8.length; i++) {
    binary += String.fromCharCode(uint8[i])
  }
  console.log(value)
  console.log(Bits)
  return btoa(binary)
}

return (uint8ToBase64(Bits).replace("=", ""))
}