const names =["Nathan", "Karolis", "Jamie"];

let addTask = (task)=>{
    console.log("AddTask function:")
    names.push(task);
    console.log("Added " + task + " to the array.");
    return console.log("Number of names in the array = " + names.length);
}

function listAllTasks(index){
    return console.log(index);
}

let index = names.indexOf(names);

let deleteTask = (task)=>{
    console.log("DeleteTask function:")
    names.splice(index,1);
    console.log("Deleted " + task + " to the array.");
    return console.log("Number of names in the array = " + names.length);
}

addTask("Jonathan");
names.forEach(listAllTasks);
deleteTask("Karolis");
