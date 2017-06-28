// function
function addMoreProperties(action) {
	return this.name + " No va a " + action + " a ti."
}

// Object literal
var Dog1 = {
	name: "Zorro",
	legs: 4
}

var Dog2 = {
	name: "Lobo",
	legs: 6
}

// Call method
console.log(addMoreProperties.call(Dog1, "golpearte")); // Explicit arguments

console.log(addMoreProperties.call(Dog2, "lastimarte")); // Explicit arguments

