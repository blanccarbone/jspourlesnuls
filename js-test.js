/**
 * Created by redcat on 13/12/2014.
 */

function sayHi() {
    var txtName, divOutput;

    txtName = document.getElementById("txtName");
    divOutput = document.getElementById("divOutput");

    name = txtName.value;

    divOutput.innerHTML = "<em>" + name + "</em></br>Est un très jolie prénom";


}


function move(){
    var divBouger = document.getElementById("bouger");


    for(i=divBouger.style.left.valueOf(); i<window.innerWidth-408; i++){
        divBouger.style.left= i+"px";
    }

}

