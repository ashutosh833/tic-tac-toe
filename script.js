let resetBtn=document.querySelector("#reset");
let img=document.querySelector(".img");
let firstPlayer=document.querySelector(".first");
let secondPlayer=document.querySelector(".second");
let firRow=document.querySelectorAll(".row-1");
let firarr=Array.from(firRow);
let secRow=document.querySelectorAll(".row2");
let secarr=Array.from(secRow);
let thirdRow=Array.from(document.querySelectorAll(".row3"));
let firstCol=Array.from(document.querySelectorAll(".col-1"));
let secondCol=Array.from(document.querySelectorAll(".col-2"));
let thirdCol=Array.from(document.querySelectorAll(".col-3"));
let d1=Array.from(document.querySelectorAll(".d-1"));
let d2=Array.from(document.querySelectorAll(".d-2"));
let turns=document.querySelector(".turns");
let winner=document.querySelector(".winningStatus");
console.dir(winner);
let allBox=document.querySelectorAll(".box");
let tingAudio=new Audio("ting.mp3");
let bgmusic=new Audio("music.mp3");
let gameover=new Audio("gameover.mp3");
let firScore=0;
let secScore=0;
let firPlrInp=prompt("enter the name of first player:");
let secplrInp=prompt("enter the name of second player:");
turns.innerHTML=`${firPlrInp}'s turn`;
firstPlayer.innerHTML= `${firPlrInp}:${firScore}`;
secondPlayer.innerHTML=`${secplrInp}:${secScore}`;
let started=false;
function gameOver(){
    tingAudio.pause();
    img.style.display="block";
    started=false;
    bgmusic.pause();
    gameover.play();
    for(el of allBox){
        el.innerHTML="";
    }
};

function checkWinner1(){
                let conditionR1=firarr.every((el)=>(el.innerHTML!==""&&el.innerHTML==="X"));
                let conditionR2=secarr.every((el)=>(el.innerHTML!==""&&el.innerHTML==="X"));
                let conditionR3=thirdRow.every((el)=>(el.innerHTML!==""&&el.innerHTML==="X"));
                let conditionC1=firstCol.every((el)=>(el.innerHTML!==""&&el.innerHTML==="X"));
                let conditionC2=secondCol.every((el)=>(el.innerHTML!==""&&el.innerHTML==="X"));
                let conditionC3=thirdCol.every((el)=>(el.innerHTML!==""&&el.innerHTML==="X"));
                let conditionD1=d1.every((el)=>(el.innerHTML!==""&&el.innerHTML==="X"));
                let conditionD2=d2.every((el)=>(el.innerHTML!==""&&el.innerHTML==="X"));

                
                if(conditionR1==true||conditionR2==true||conditionR3==true||conditionC1==true||conditionC2==true||conditionC3==true||conditionD1==true||conditionD2==true){
                  console.log(`${firPlrInp} won`);
                  img.style.display="block";
                  started=true;
                  winner.innerHTML=`${firPlrInp} won the game`;
                  firScore++;
                  firstPlayer.innerHTML= `${firPlrInp}:${firScore}`;    
                }
}
function checkWinner2(){
                let conditionR1=firarr.every((el)=>(el.innerHTML!==""&&el.innerHTML==="O"));
                let conditionR2=secarr.every((el)=>(el.innerHTML!==""&&el.innerHTML==="O"));
                let conditionR3=thirdRow.every((el)=>(el.innerHTML!==""&&el.innerHTML==="O"));
                let conditionC1=firstCol.every((el)=>(el.innerHTML!==""&&el.innerHTML==="O"));
                let conditionC2=secondCol.every((el)=>(el.innerHTML!==""&&el.innerHTML==="O"));
                let conditionC3=thirdCol.every((el)=>(el.innerHTML!==""&&el.innerHTML==="O"));
                let conditionD1=d1.every((el)=>(el.innerHTML!==""&&el.innerHTML==="O"));
                let conditionD2=d2.every((el)=>(el.innerHTML!==""&&el.innerHTML==="O"));

                if(conditionR1==true||conditionR2==true||conditionR3==true||conditionC1==true||conditionC2==true||conditionC3==true||conditionD1==true||conditionD2==true){
                    img.style.display="block";
                    console.log(`${secplrInp} won`);
                    started=true;
                    winner.innerHTML=`${secplrInp} won the game`;
                    secScore++;
                    secondPlayer.innerHTML=`${secplrInp}:${secScore}`;                
                }
}

resetBtn.addEventListener("click",()=>{
                        gameOver();
})
allBox.forEach((el)=>{

        el.addEventListener("click",(event)=>{
            bgmusic.play();
        if(started==false){
            if(el.innerHTML=="X"||el.innerHTML=="O"){
            console.log("sorry the box is already filled");
        }
        else{
        if(turns.innerHTML==`${firPlrInp}'s turn`){
                el.innerHTML="X";
                turns.innerHTML=`${secplrInp}'s turn`;
                checkWinner1();
        }else{
           el.innerHTML="O";
           turns.innerHTML=`${firPlrInp}'s turn`;
           checkWinner2();   
        } 
    }
        }
        tingAudio.play();
    });    

    });
