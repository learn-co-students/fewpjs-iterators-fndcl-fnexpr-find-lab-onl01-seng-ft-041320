const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(bowls) {

  let win = bowls.find( (bowl) => {
    return bowl.result === "W" 
  });

  if (win === undefined) {
    return undefined
  } else {
    return win.year
  }
}