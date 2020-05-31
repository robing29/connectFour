//Create array of divs
const spielFeld = [[],[],[],[],[],[],[]];
var topRow = [];

//player = 1, wenn player1 am Zug ist, player = 2, wenn player2 am Zug ist
let player = 1;

function createArray(){
    let x = document.querySelectorAll(".tr1,.tr2,.tr3,.tr4,.tr5,.tr6,.tr7");
    
    for (let i = 0; i < x.length; i++){
        spielFeld[i] = Array.from(x[i].getElementsByClassName("whitecircle"));
    }
    let z = document.querySelectorAll(".tr0");
    topRow = Array.from(z[0].getElementsByClassName("tchead"));
}

createArray();
console.log(spielFeld);
console.log(topRow);

createCol(spielFeld){
    for (let i = 0; i < spielFeld.length; i++){
        for (let k = 0; k < spielFeld[i].length; k++){
            if (spielFeld[k][i].full == true){
                //do Nothing
            } else {
                
            }
        }
    }
}

