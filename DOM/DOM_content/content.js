var h2 = document.querySelector("#header2");

var h2inside = h2.querySelector("a") // Select a tag inside of h2

console.log(h2inside.getAttribute())
h2inside.setAttribute("href", "https://www.google.com")

