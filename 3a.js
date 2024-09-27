const names =["Nathan", "Karolis", "Jamie"];

let addTask = (task)=>{
    names.push(task);
    console.log("Added " + task + " to the array.");
    return console.log(names.length);
}

function listAllTasks(index){
    return console.log(index);
}

let index = names.indexOf(names);

let deleteTask = (task)=>{
    names.splice(index,1);
    console.log("Deleted " + task + " to the array.");
    return console.log(names.length);
}

addTask("Jonathan");
names.forEach(listAllTasks);
deleteTask("Karolis");
