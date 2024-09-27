const names = ["Nathan", "Karolis", "Jamie"];
element = "";

let addTask = (task) => {
    console.log("AddTask function:")
    names.push(task);
    console.log("Added " + task + " to the array.");
    return console.log("Number of names in the array = " + names.length);
}

let listAllTasks = () => {
    names.forEach((element) => {
        console.log(element)
    })
}

let deleteTask = (task) => {
    console.log("DeleteTask function:")
    let index = names.indexOf(names);
    names.splice(index, 1);
    console.log("Deleted " + task + " to the array.");
    return console.log("Number of names in the array = " + names.length);
}

addTask("Jonathan");
listAllTasks();
deleteTask("Karolis");
