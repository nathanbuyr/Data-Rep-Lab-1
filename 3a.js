const names =["Nathan", "Karolis", "Jamie"];

let addTask = (task)=>{
    names.push(task);
    console.log("Added " + task + " to the array.");
    return console.log(names.length);
}

function listAllTasks(index){
    return console.log(index);
}

addTask("Jonathan");
names.forEach(listAllTasks);
