const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(bowls) {
  let win = bowls.find( (bowl) => {
    return bowl.result === "W" 
  });

  if (win === undefined) {
    return win
  } else {
    return win.year
  }
}