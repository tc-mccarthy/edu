/*
	IDEAL SOLUTION. DON'T CHEAT!! LOOK AT THIS AFTER THE IN CLASS EXERCISE IS COMPLETE.
	THERE ARE MANY CORRECT ANSWERS. THIS CODE REFLECTS THE DRY IDEALS THAT WE'RE LEARNING IN CLASS
*/


//first declare counters for total calories and total cost globally and then set to zero.
var totalCalories = 0,
	totalCost = 0;

$(document).ready(function () { //on DOM ready, bind clicks
	$("#compute").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		/*
			Go through each fruit, one by one, and increment the totals for cost and calories.
			You can do this with the $.each method from jQuery.

			Doing it this way allows the JS to be agnostic
			to your fruit selection, pricing and calorie count.

			This method also allows you to add and remove
			fruit from the form on a whim or easily modify
			price points and calorie counts, all without touching the JS
		*/

		$(".fruit").each(function () { //look at each element with the class 'fruit', one by one.
			//Our variables are all preceeded by a single 'var' statement,
			//which looks neater but still confines them to the scope of this function.

			var fruit = $(this), //just like when clicking on classes, we need to know which one of the fruits our code is looking at now.
				quantity = parseInt(fruit.val()), //store the number of pieces of this fruit the user requested
				cost_per_item = parseFloat(fruit.data("price")), //store this fruit's individual cost as a variable
				calories_per_item = parseFloat(fruit.data("calories")); //store this fruit's individual calorie count as a variable

			//fire the total cost function to calculate the total cost for this quantity of this fruit and then add it to the total cost
			update_total_cost(quantity, cost_per_item);

			//fire the calories function to calculate the total calories for this quantity of this fruit and then add it to the total calories
			update_total_calories(quantity, calories_per_item);
		}); //end each

		//once we've gotten through all of the fruits, output the results
		show_results();
	});
});

//defining the functions outside of document.ready

function update_total_cost(quantity, cost_per_item) {
	//multiply the quantity by the cost_per_item and store it as a variable
	var total_for_this_fruit = quantity * cost_per_item;

	//take the current value for totalCost and increase it by the total_for_this_fruit. totalCost is a GLOBAL variable -- don't preceed it with 'var'
	totalCost = totalCost + total_for_this_fruit; //this literally says set totalCost equal to the current value for totalCost + the value of total_for_this_fruit. Pretty neat, huh?
}

function update_total_calories(quantity, calories_per_item) {
	//multiply the quantity by the cost_per_item and store it as a variable
	var total_for_this_fruit = quantity * calories_per_item;

	//take the current value for totalCost and increase it by the total_for_this_fruit. totalCalories is a GLOBAL variable -- don't preceed it with 'var'
	totalCalories = totalCalories + total_for_this_fruit; //this literally says set totalCalories equal to the current value for totalCalories + the value of total_for_this_fruit. Still awesome
}

function show_results() {
	//totalCost and totalCalories are GLOBAL variables. This function can see them no problem!
	$("#cost").val(totalCost);
	$("#calories").val(totalCalories);
}
