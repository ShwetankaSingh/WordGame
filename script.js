var things = ['Rock', 'Paper', 'Scissor','Summer','Winter','Break','bring','brother','budget','build','building','business'];

var fps = 1;
const fallwords = document.querySelector(".current-word");
const typed=document.querySelector("#entered");
const correctListRef=document.querySelector("#correctList");
const incorrectListRef=document.querySelector("#incorrectList");
const modalPlayAgainRef = document.querySelector(".modal-play-again");
const resultMsgRef = document.querySelector(".result-msg");
const resultIconRef = document.querySelector(".result-icon");
const marks=document.querySelector(".score-board");


console.log(typed);


fallwords.innerHTML=things[Math.floor(Math.random()*things.length)];
let y=0;
let score=0;
let count=0;

function start(){
  setTimeout(fun, 1000);
}
function fun(){
  marks.innerText=score;
  modalPlayAgainRef.classList.add("hide");
  if (parseInt(y) == 92) {
   console.log(fallwords.innerHTML);
   const temp=fallwords.innerHTML;
   if(count==20)
   {
    fallwords.innerHTML="";
    if(score>0)
      {
        resultMsgRef.innerText = "You win";
        resultIconRef.style.transform = "rotate(0deg)";
        modalPlayAgainRef.classList.remove("hide");
      }
      else{
        resultMsgRef.innerText = "You lose";
        resultIconRef.style.transform = "rotate(65deg)";
        modalPlayAgainRef.classList.remove("hide");
        return;
      }
   }
   if(temp==typed.value)
   {
     score++;
     let te=`<div>${typed.value}</div>`;
     correctListRef.innerHTML=correctListRef.innerHTML+te;
   console.log("Correct"+typed.value+score);
   }
   else
   {
     score--;
     let te=`<div>${temp}</div>`;
     incorrectListRef.innerHTML=incorrectListRef.innerHTML+te;
   console.log("InCorrect"+typed.value+score);
   }
   count++;
   fallwords.innerHTML= things[Math.floor(Math.random()*things.length)];

    y = 0;
  }
  fallwords.style.top = `${y}%`;
  y++;
  requestAnimationFrame(fun);

}
start();






