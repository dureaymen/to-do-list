import inquirer from "inquirer";
let todoList = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "what you want to add in your todolist?",
            type: "input",
        },
        {
            name: "addMore",
            message: "are you sure to want to add more in your todoList",
            type: "confirm",
            default: "false",
        }
    ]);
    todoList.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todoList);
}
;
