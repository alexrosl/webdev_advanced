function copyObject(obj){
	return Object.assign({}, obj);
}

function checkIfFinite(num){
	return Number.isFinite(num);
}

function areAllNumbersFinite(arr){
	return arr.every(Number.isFinite);
}

function convertArrayLikeObjec5t(obj){
	return Array.from(obj);
}

function displayEvenArguments(){
	function Array.from(arguments).filter(val => val % 2 === 0)	
}