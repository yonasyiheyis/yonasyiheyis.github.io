function bigger(){
    var current;
    if (document.getElementById("ta").style.fontSize == ""){
        current = 12;
    }
    else{
        current = parseInt(document.getElementById("ta").style.fontSize);
    }
    
    newSize = current + 2;
    document.getElementById("ta").style.fontSize = newSize.toString()+"pt";

}

function changeStyle(){
    var textA = document.getElementById("ta");
    textA.style.fontWeight = "bold";
    textA.style.color = "green";
    textA.style.textDecoration = "underline";
}