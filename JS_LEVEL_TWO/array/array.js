var myarr = ["python", "django", "computer science"];

for (item of myarr){
    console.log(item);
}

function alert(item){
    console.log("Alert "+item);
}

myarr.forEach(alert);