const testVar = {}

function testFunc() {
  return "hi"
}

let record

function superbowlWin(record) {
  const results = record.find(function(object) {
  return object.result === 'W'
})
return results === undefined ? undefined : results.year
}