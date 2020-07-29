const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
  const win = arr.find(data=> data.result === 'W')
  if (win) {
    return win.year
  }
}
