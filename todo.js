let todo=[];

let request=prompt("Enter your request");

while(true){
    if(request == "quit"){
        console.log("You quitted");
        break;
    }

    if(request == "list"){
        console.log("-----------");
        for(let i=0; i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("-----------");
    }
    else if(request == "add"){
        let task=prompt("Enter your task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(request == "delete"){
        let idx=prompt("Enter the index you want to delete");
        todo.splice(idx,1);
        console.log("Your task has deleted");
    }
    else{
        console.log("Invalid request");
    }

    request=prompt("Enter your request");

}