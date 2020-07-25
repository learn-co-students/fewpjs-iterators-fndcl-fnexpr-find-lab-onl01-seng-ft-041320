const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  
  //...
]


function superbowlWin(record) {
  let obj = record.find(record => record.result === "W");
  if (obj) {
    return obj.year
  } else {
    return undefined;
  }
}

// function superbowlWin() {
//   if { record.find( record.result === "W")
//   return record.year
//   } else {
//     return "undefined"
//   }
// }

