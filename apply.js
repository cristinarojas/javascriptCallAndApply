// function
function addMoreProperties(action1, action2) {
	return this.name + " No va a " + action1 + " ni a " + action2 + " a ti."
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


//Apply method
console.log(addMoreProperties.apply(Dog1, ["lastimarte", "asustarte"])); // We pass more parameters in array

console.log(addMoreProperties.apply(Dog2, ["perseguirte", "herirte"])); // We pass more parameters in array
