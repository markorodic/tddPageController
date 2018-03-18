function describe(string, callback) {
	console.info(string);
	return callback();
}

function it(string, callback) {
	console.log(string);
	return callback();
}

function expectToEql(value1, value2){
  	var areValuesEqual = (value1 == value2)

  	if (areValuesEqual) {
  		console.log(areValuesEqual)
  	} else {
  		console.warn(areValuesEqual, `Expected ${value1} to equal ${value2}`)
  	}
}