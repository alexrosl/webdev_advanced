function displayStudentInfo(obj){
	var {first, last}  = obj;
	return 'your full name is ${first} ${last}'
}

function printFullName({first, last}){
	return 'your full name is ${first} ${last}'
}

function createStudent({likesJavaScript = true, likesES2015 = true} = {}){
	var start = "The student";
	if(likesES2015 && likesJavaScript){
		start += " likes JS and ES2015"
	} else if(likesJavaScript){
		start += " likes JS"
	} else if(likesES2015){
		start += " likes ES2015"
	} else {
		start += " does not like much"
	}
	return start;
}

function reverseArray(arr){
	for(var i = 0; i < arr.length/2; i++){
		[arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
	}
	return arr;
}