function hello(){
    console.log("Hello World !!")
}

function helloyou(name){
    console.log("Hello You "+name)
}

function addnum(num1="Hello ", num2="default"){
    console.log("Result : ", num1+num2)
}


var v="GLOBAL V"
var stuff = "GLOBAL STUFF"

 function fun(stuff){
     console.log(v);
     stuff = "Reassign Stuff inside function"
 }