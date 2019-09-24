var state="start";
var names = [];

function add(names){
    var name=prompt("Insert a name : ");
    if (names.includes(name)){
        alert("Cannot add. Name "+name+"already existed !!!");
    } else{
        names.push(name);
        alert("Successfully add name : "+name);
    }
}

function remove(names){
    var name=prompt("Insert a name you wan to delete : ");
    var new_names = [];
    if (names.includes(name)){
        names.splice(names.indexOf(name),1);    
        alert("Successfully remove name " + name);
    } else{
        alert("Name "+name+"not existed to remove !!!");
    }
}

function display(names){
    names.forEach(console.log)
}

while (state != "stop"){
    var func = prompt("Choose your command from this list : add, remove, display and quit");
    if (func == "quit"){
        state = "stop";
    }
    else if (func == "add"){
        add(names);
    }
    else if (func == "remove"){
        remove(names)
    }
    else if (func == "display"){
        display(names)
    }
    else{
        alert("Invalid command !!!")
    }
}