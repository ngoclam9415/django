var player1 = prompt("Player 1 please fill your name");
var player2 = prompt("Player 2 please fill your name");

var nof_cols = $("tr").eq(0).find("td").length;
var nof_rows = $("tr").length;
var cols = [];
var turn = 0;

var playername = turn === 0 ? player1 : player2;
$("#leading").text("Hello Player  "+ playername)

function on_double_click (){
    var id = $(this).attr("id");
    var col_circles = $("td").find(".content"+"#"+id).find("#circle");
    console.log(col_circles)
    for (i=col_circles.length - 1; i >= 0; i--){
        if (col_circles.eq(i).css("background-color") == "rgb(128, 128, 128)"){
            if (turn === 0){
                col_circles.eq(i).css("background-color", "red");
                turn = 1;
            } else if (turn === 1){
                col_circles.eq(i).css("background-color", "blue");
                turn = 0;
            }
            break
        }
    }
    playername = turn === 0 ? player1 : player2;
    $("#leading").text("Hello Player  "+ playername)
    // $(this).css("background-color", "red")
    console.log(id)
}



var cols = $("tr").find(".content").on("dblclick", on_double_click);


