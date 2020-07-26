// const record = [
//   { year: "2018", result: "L" },
//   { year: "2017", result: "W" },
//   { year: "2016", result: "N/A" }
// ]

function superbowlWin(array) {
    let found = array.find(function(array) { 
      return array.result === "W"})
    if (!!found) { 
      return found.year
    }
    return undefined
}

// console.log(superbowlWin(record))