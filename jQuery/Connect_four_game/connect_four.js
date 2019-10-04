var player1 = prompt("Player 1 please fill your name");
var player2 = prompt("Player 2 please fill your name");

var nof_cols = $("tr").eq(0).find("td").length;
var nof_rows = $("tr").length;
var cols = [];
var turn = 0;
var winner = undefined;

var playername = turn === 0 ? player1 : player2;
$("#leading").text("Hello Player  "+ playername)


function on_double_click (){
    var id = $(this).attr("id");
    var col_circles = $("td").find(".content"+"#"+id).find("#circle");
    console.log(col_circles)
    var player1_score = 0, player2_score = 0;
    for (i=col_circles.length - 1; i >= 0; i--){
        if (col_circles.eq(i).css("background-color") == "rgb(128, 128, 128)"){
            if (turn === 0){
                col_circles.eq(i).css("background-color", "red");
                turn = 1;
            } else if (turn === 1){
                col_circles.eq(i).css("background-color", "blue");
                turn = 0;
            }
            var nearest_row = $(this).closest("tr");
            var nearest_row_cols = nearest_row.find(".content").find("#circle");
            for (col_index = 0; col_index < nearest_row_cols.length; col_index ++){
                console.log(player2_score+ "  asdasd   "+ player1_score)
                if (nearest_row_cols.eq(col_index).css("background-color") == "rgb(255, 0, 0)"){
                    if (player1_score >= 0){
                        player1_score += 1;
                    } else if (player2_score >= 0){
                        player2_score = 0;
                    }
                } else if (nearest_row_cols.eq(col_index).css("background-color") == "rgb(0, 0, 255)"){
                    if (player2_score >= 0){
                        player2_score += 1;
                    } else if (player1_score >= 0){
                        player1_score = 0;
                    }
                }
            }
            break
        }
    }
    winner = player1_score >= 4 ? player1 : player2_score >= 4 ? player2 : undefined;
    console.log("WINNER IS : ", winner);
    playername = turn === 0 ? player1 : player2;
    $("#leading").text("Hello Player  "+ playername);

    // console.log(id)
}



var cols = $("tr").find(".content").on("dblclick", on_double_click);


