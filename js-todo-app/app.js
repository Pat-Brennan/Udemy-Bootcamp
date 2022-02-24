let todos = [];

let input = window.prompt("What would you like to do?");
while (input !== "quit") {
	window.prompt("What would you like to do?");
	if (input === "quit") {
		console.log("Okay well see ya!");
		break;
	} else if (input === "new") {
		todos.push(input);
		console.log(todos);
	} else if (input === "list items") {
		console.log(todos);
	}
}
