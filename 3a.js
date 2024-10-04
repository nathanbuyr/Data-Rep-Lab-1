//Initializing the array
const names = ["Nathan", "Karolis", "Jamie"];
element = "";

//function adds user defined varialbe into the end of the array with .push
let addTask = (task) => {
    console.log("AddTask function:")
    names.push(task);
    console.log("Added " + task + " to the array.");
    return console.log("Number of names in the array = " + names.length);
}

//forEach logs every element in the array
let listAllTasks = () => {
    names.forEach((element) => {
        console.log(element)
    })
}

//Splice element removes a specific element in the array
let deleteTask = (task) => {
    console.log("DeleteTask function:")
    let index = names.indexOf(names);
    names.splice(index, 1);
    console.log("Deleted " + task + " to the array.");
    return console.log("Number of names in the array = " + names.length);
}

//Calling the Functions
addTask("Jonathan");
listAllTasks();
deleteTask("Karolis");
