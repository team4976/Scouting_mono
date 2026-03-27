import { vlars } from "./Functions"
const teams = ["610", "772", "1334", "2200", "2386", "2609", "2702", "3683", "3756", "4308", "4617", "4678", "4917", "4940", "4946", "4976","5408", "5409", "5870", "5912", "6725", "6854", "6875", "6975","7058", "8089", "8764", "9098", "9263", "10514", "11227"]

const save = () => {
    localStorage.setItem("data", JSON.stringify(vlars))
  }
  

export function genCodeValue() {
  let teamid
  let telemiss = vlars.a1miss + vlars.a2miss + vlars.endmiss
  let setTeam = false
  teams.forEach((value, index) => {
    if (value == vlars.teamno){
      teamid = index
      setTeam = true
    }
})
if (!setTeam){
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
  if (vlars.position >= 4) {
    vlars.color = false
  } else {
    vlars.color = true
  }
  const packedTeleScore = Math.floor(telescore / 2)
  const packedAutoScore = Math.floor(vlars.autoscore / 2)
 const Bits = new Uint8Array(11)

Bits[0] = (((Number(vlars.color) & 0x01) << 7) |
           ((Number(teamid) & 0x1F) << 2) |
           ((Number(vlars.noshow) & 0x01) << 1) |
           (Number(vlars.autocollect) & 0x01))

Bits[1] = (((Number(vlars.matchno) & 0x7F) << 1) |
           (Number(vlars.autooutp) & 0x01))

Bits[2] = (((Number(packedAutoScore) & 0x3F) << 2) |
           (Number(autoclm) & 0x03))

Bits[3] = (((Number(vlars.automiss) & 0x0F) << 4) |
           ((Number(vlars.autodepo) & 0x01) << 3) |
           ((Number(vlars.autocollect) & 0x01) << 2) |
           ((Number(vlars.a1take) & 0x01) << 1) |
           (Number(vlars.a1outp) & 0x01))

Bits[4] = Number(packedTeleScore) & 0xFF

Bits[5] = (((Number(telemiss) & 0x7F) << 1) |
           (Number(vlars.a2take) & 0x01))

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

Bits[10] = (((Number(vlars.autowin) & 0x01) << 7) |
            ((Number(vlars.enterMid) & 0x01) << 6) |
            ((Number(vlars.crossMid) & 0x01) << 5) |
            ((Number(vlars.startingPosition) & 0x03) << 3))
console.log(Bits)
function uint8ToBase64(uint8) {
  let binary = ""
  for (let i = 0; i < uint8.length; i++) {
    binary += String.fromCharCode(uint8[i]) 
  }
  return btoa(binary)
}

return (uint8ToBase64(Bits).replace("=", ""))
}

//Not needed i dont think
export function genCodeValueEX(value) {
  let teamid
  teams.forEach((values, index) => {
  if (values == value.teamno){
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

Bits[3] = (
           ((Number(value.autodepo) & 0x01) << 3) |
           ((Number(value.autocollect) & 0x01) << 2) |
           ((Number(value.a1take) & 0x01) << 1) |
           (Number(value.a1outp) & 0x01))

Bits[4] = Number(telescore) & 0xFF

Bits[5] = ((Number(value.a2outp) & 0x01))

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
  return btoa(binary)
}

return (uint8ToBase64(Bits).replace("=", ""))
}
