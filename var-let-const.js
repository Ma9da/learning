/**
 * var => can be declares after initialization
 * let => must be initialized then used
 */
function scope1() {
	bottom = "bottom";
	console.log("use variable before declaration by var", bottom);
	var bottom;
}
function scope2() {
	bottom = "bottom";
	console.log("use variable before declaration by var", bottom);
	let bottom;
}
// scope1(); //bottom
// scope2(); // error
/**8888888888888888888888888888888888888888888888888888888888888 */
function scope11(print) {
	if (print) {
		var insideIf = 12;
	}
	console.log(insideIf);
}
function scope12(print) {
	if (print) {
		let insideIf = 12;
	}
	console.log(insideIf);
}
// scope11(true); //12
// scope12(true); //ReferenceError: insideIf is not defined
function scope111(print) {
	var insideIf;
	if (print) {
		insideIf = 12;
	}
	console.log(insideIf);
}
function scope112(print) {
	let insideIf;
	if (print) {
		insideIf = 12;
	}
	console.log(insideIf);
}
// scope111(true); //12
// scope112(true); //12
function scopee111(print) {
	var insideIf = 5;
	if (print) {
		var insideIf = 12;
	}
	console.log(insideIf);
}
function scopee112(print) {
	let insideIf = 5;
	if (print) {
		let insideIf = 12;
	}
	console.log(insideIf);
}
// scopee111(true);
// scopee112(true);
var a = 1;
function scopee11() {
	if (true) {
		//redeclared
		var a = 12;
	}
	console.log(a);
}
var a1 = 1;
function scopee12() {
	if (true) {
		let a1 = 12;
	}
	console.log(a1);
}
// scopee11();
// scopee12();
