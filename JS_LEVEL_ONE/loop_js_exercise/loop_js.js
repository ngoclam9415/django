for (i=0; i<5; i++){
    console.log("Hello For "+i);
}
i=0;
while(i<5){
    console.log("Hello While "+i);
    i++;
}

var start = parseInt(prompt("Input starting number : "));
var stop = parseInt(prompt("Input stopping number : "));
for (i=start; i<=stop; i++){
    if (i%2 != 0){
        console.log("Odd number for : "+i);
    }
}

i = start;
while(i<=stop){
    if (i%2 != 0){
        console.log("Odd number while : "+i);
    }
    i++;
}