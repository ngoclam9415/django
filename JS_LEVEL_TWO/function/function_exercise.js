function sleepin(weekday, vacation){
    if (!weekday || vacation) return true
    else return false
}

function stringtimes(string="Hi", times=1){
    return_string = "";
    for (i=0; i<times; i++){
        return_string +=string;
    }
    return return_string
}

function luckysum(){
    console.log(arguments);
    sum = 0
    for (index=0; index<arguments.length; index++){
        sum += (arguments[index] == 13 || arguments[index - 1] == 13) ? 0 : arguments[index];
        console.log(arguments[index - 1])

    }
    return sum
}

function makeBricks(small, big, goal){
    number_of_max_big = parseInt(goal / 5);
    number_of_available_big = number_of_max_big <= big ? number_of_max_big : big;
    number_of_max_min = goal - number_of_available_big*5;
    if (number_of_max_min <= small) return true;
    else return false;
}