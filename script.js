//your JS code here. If required.
let student = {
	name : "Jahnavi"
}
function getKeys(obj) {
	return Object.keys(obj);
}
console.log(getKeys(student));

console.log(getKeys({
	name : "John",
	age : 24,
	city : "Hyd"
}));