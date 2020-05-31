//Create array of divs
let y = [[],[],[],[],[],[],[]];

function createArray(){
    let x = document.querySelectorAll(".tr1,.tr2,.tr3,.tr4,.tr5,.tr6,.tr7");
    
    for (let i = 0; i < x.length; i++){
        y[i] = Array.from(x[i].getElementsByClassName("whitecircle"));
    }
}
createArray();
console.log(y);