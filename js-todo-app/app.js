//* A simple to do list used in the console

//? Create an empty array for todo entries
const todos = [];

//? Prompt the user to enter information
let input = window.prompt("What would you like to do?");

//? create our "game" loop (a loop that won't end unless you type "quit")
while (input !== "quit" && input !== "q") {
	//? Start creating our commands
	if (input === "list") {
		//? When list is typed, we iterate through and print todos array
		console.log("**********");
		for (let i = 0; i < todos.length; i++) {
			console.log(`${i}: ${todos[i]}`);
		}
		console.log("**********");
	}
	//? When New is typed, we PUSH the new entry on to the todo array
	else if (input === "new") {
		const newTodo = window.prompt("What would you like to add?");
		todos.push(newTodo);
		console.log(`${newTodo} added to the list woo!`);
	}
	//? When Delete is typed, we SPLICE the desired index out of the array
	else if (input === "delete") {
		const deleteTodo = parseInt(
			window.prompt("Please input the number of the task to delete")
		);
		//? Nested conditional to ensure what is entered is a number
		if (!Number.isNaN(deleteTodo)) {
			const deleted = todos.splice(deleteTodo, 1);
			console.log(`annnd ${deleted[0]} is GONE!!!`);
		} else {
			console.log("Unknown Index");
		}
	}
	input = window.prompt("What would you like to do?");
}

//? If quit is typed, we skip the entire while loop above and print this
console.log("Ok Buh Bye Now!");
console.log("You have a nice day!");

// And then you're done!
