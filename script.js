//your JS code here. If required.
document.addEventListener('DOMContentLoaded', ()=> functionName())
function functionName(){
	alert(arguments.callee.name);
}