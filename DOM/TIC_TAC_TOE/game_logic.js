var button_state = ["0, 0, 0, 0, 0, 0, 0, 0, 0"];
var id_name = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var id_item = [];



// for ([num, id] of id_name.entries()){
//     id_item.push(document.querySelector(id))
//     id_item[num].addEvent
// }

class grid_info{
    constructor(id){
        this.id = id;
        this.state = 0;
        this.item = document.querySelector("#" + id);
        let self = this;
        this.item.addEventListener("dblclick", function(){self.change_state();}, false) // this is a closure to keep scope of EventListener linked to this scope
    }

    change_state(){
        // console.log(this.state  < 2 ? this.state + 1 : 0)
        this.state = this.state < 2 ? this.state + 1 : 0;
        console.log(this.item);
        console.log(this.state);
        if (this.state == 0){
            this.item.textContent = "";
        }
        else if (this.state == 1) {
            this.item.textContent = "X";
        }
        else{
            this.item.textContent = "O";
        }
    }

    add_event(){
        this.item.addEventListener("dblclick", this.change_state);
        console.log(this.item)
    }
}

for (id of id_name){
    id_item.push(new grid_info(id));
}
// var one = new grid_info("one");
// one.item.addEventListener("dblclick", one.change_state, false)
// one.add_event()