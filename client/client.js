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

function createMethod(){
    for (let i = 0; i < spielFeld.length; i++){
        for (let k = 0; k < spielFeld[i].length; k++){
            doEverything(spielFeld[i][k]);
            // createCol(spielFeld[i][0]);
            /* spielFeld[i][k].full = 0;
            spielFeld[i][k].cc = spielFeld[i][k].addEventListener('click', () => changeClass(spielFeld[i][k])); */
        }
    }
}
createMethod();


function doEverything(arrPos){
    //sets the property "full" of the div-element to false
    createHitProperty = (arrPos) => {
        arrPos.full = false;
        console.log(arrPos.full);
    }
    
    createHitProperty(arrPos);
    
    
    //From here on: Onclick functions
    createOnClick = (arrPos) => {
        arrPos.addEventListener('click', () => changeClass(arrPos));
        arrPos.addEventListener('click', () => setHitProperty(arrPos));
    }
    
    //If clicked, property of div is set to "full"
    setHitProperty = (arrPos) => {
        arrPos.full = true;
        console.log(arrPos.full);
    }
    
    changeClass = (arrPos) => {
        if(arrPos.full == false){
            if(player == 1){
                arrPos.classList.add("player1");
                arrPos.classList.remove("player2");
            } else {
                arrPos.classList.add("player2");
                arrPos.classList.remove("player1");
            }
        }
    }
        createOnClick(arrPos);
    }
    
    
    // createEventListener();
    /* spielFeld[0][1].classList.add("player1");
    spielFeld[0][0].classList.add("player2"); */