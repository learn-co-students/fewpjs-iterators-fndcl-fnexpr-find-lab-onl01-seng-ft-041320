const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const win = record.find(e => e.result === "W")
  return win !== undefined ? win.year : win
}