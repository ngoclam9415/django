var myh1 = document.querySelector("#welcome");
var myp = document.querySelector(".para");

function generate_random_color(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i< 6; i++){
        color += letters[Math.floor(Math.random()*letters.length)];
    }
    return color
}

function change_color(){
    var color_value = generate_random_color();
    myh1.style.color = color_value;
    var color_value = generate_random_color();
    myp.style.color = color_value;
}

setInterval(change_color, 1000); // Set interval of 1000 milisecond
// setInterval()