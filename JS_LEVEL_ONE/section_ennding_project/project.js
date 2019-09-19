var FirstName = prompt("Hello and Welcome. Please enter your first name : ");
var LastName = prompt("Please enter your last name : ");
var height = prompt("How tall are you (cm) ?");
var petname = prompt("What is your pet's name ?");

alert("Thank your so much for the information");
if (FirstName[0] == LastName[0] && height >= 170 && petname[petname.length - 1] == "y"){
    console.log("Hello Agent 007")
} else {
    console.log("Sorry for your curiosity :))")
}