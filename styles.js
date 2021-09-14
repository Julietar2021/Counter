


let number = document.getElementById("number");
let count = 0;
count  += 1;

function increasing() {

number.innerHTML= count;
count++;
number.style.backgroundColor = "black";
$(number).css("color", "white")

if(count < 0){


    number.style.backgroundColor = "#ff645c";
    $(number).css("color", "black")
    }
    else {
        
    }

}


function reset() {
count = 0;
number.innerHTML = count;
number.style.backgroundColor = "#5838d9";
$(number).css("color", "white")
}

function decrease() {
count--;
number.innerHTML=count;
number.style.backgroundColor = "grey";
number.style.backgroundColor = "lightblue";
$(number).css("color", "black")
let btn = document.getElementById("btn1");


if(count < 0){


number.style.backgroundColor = "#ff645c";
$(number).css("color", "black");


}
else {

}
}