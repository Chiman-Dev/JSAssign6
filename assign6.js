/*Added if else condition for handle all the 3 condition */
for (var i = 1; i <=100; i++) {
	if (i%3==0 && i%5==0) { //If the number is divisibleby both 3 and 5 than execute this and other else if condition will not execute
		console.log(i+" FizzBuzz");
		
	}else if (i%3==0) { // if 1st condition fails then it will execute
		console.log(i+" Fizz");
	}else if (i%5==0) { // if 1st and 2nd condition fails then it will execute
		console.log(i+ " Buzz");
	}else {            // if all the above condition fails then it will execute
		console.log(i)
	}

}