var headone = document.querySelector("#one");
var headtwo = document.querySelector("#two");
var headthree = document.querySelector("#three");


headone.addEventListener("mouseover", function(){
                                                    headone.textContent = "Mouse currently over";
                                                    headone.style.color = "red";})

                                                    

headone.addEventListener("mouseout", function(){
                                                    headone.textContent = "Welcome to your DOM Event tutorial. Please hover over me";
                                                    headone.style.color = "black";})

headtwo.addEventListener("dblclick", function(){
    headtwo.textContent = "CLICKED ON";
    headtwo.style.color = "blue";
})