const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObj) {
  const results = arrayOfObj.find( function (obj){
    return obj.result === "W"
  });
  return results === undefined ? undefined : results.year
};
