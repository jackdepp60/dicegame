 // GLOBAL SCORE VARIABLE
var score1 = 0;
var score2 = 0;
var gameRound = 0;
const champion = "the champion";
const wordChamp ="champion";

//START of LAYOUT
// function onStartUp() {
//       document.querySelector(".score1").innerHTML = score1;
//       document.querySelector(".score1").innerHTML = score2;
//
//   }
//   window.onload = onStartUp;

// PLAY BUTTON LOGIC
function playBtn(){
  gameRound = gameRound + 1;
  // Player 1 Images
  var randomNumber1 = Math.floor(Math.random(6) * 6 + 1);
  var randomImage1 = "images/dice"  + randomNumber1 + ".png";
  var imageSource1 = document.querySelectorAll("img")[0];
  imageSource1.setAttribute("src", randomImage1)

// Player 2 images

  var randomNumber2 = Math.floor(Math.random(6) * 6 + 1);
  var randomImage2 = "images/dice" + randomNumber2 + ".png";
  var imageSource2 = document.querySelectorAll("img")[1];
  imageSource2.setAttribute("src", randomImage2);


// CONDITIONS

  if(randomNumber1 > randomNumber2){
    score1 = score1 += 1;
    document.querySelector(".score1").innerHTML = score1;
    document.querySelector(".title").innerHTML = "Dadad is the winner for Round " + gameRound + "!";
    document.querySelector(".title").style.fontSize = "5rem";
    document.querySelector(".title").style.padding = "2% 18%";

  }
  else if(randomNumber2 > randomNumber1){
    score2 = score2 += 1;
    document.querySelector(".score2").innerHTML = score2;
    document.querySelector(".title").innerHTML = "Rane is the winner for Round " + gameRound + "!";
    document.querySelector(".title").style.padding = "2% 18%";
    document.querySelector(".title").style.fontSize = "5rem";

  }
  else if(randomNumber1 === randomNumber2 && score1 < 4){
   document.querySelector(".title").innerHTML = "It's a DRAW for Round " + gameRound + "!";
   document.querySelector(".title").style.padding = "2% 20%";
   document.querySelector(".title").style.fontSize = "5rem";

 }
 else if(randomNumber1 === randomNumber2 && score2 < 4){
  document.querySelector(".title").innerHTML = "It's a DRAW for Round " + gameRound + "!";
  document.querySelector(".title").style.padding = "2% 20%";
  document.querySelector(".title").style.fontSize = "5rem";

}
  // // CHAMPION
  if(score2 > 4 && score2 > score1 && champion.includes(wordChamp)){
    score1 = 0;
    score2 = 0;
    gameRound = 0;

    document.querySelector(".score1").innerHTML = score1;
    document.querySelector(".score2").innerHTML = score2;
    document.querySelector(".title").innerHTML = "Rane is the Champion!";

  }
  else if(score1 > 4 && score1 > score2 && champion.includes(wordChamp)){
    score1 = 0;
    score2 = 0;
    gameRound = 0;
    document.querySelector(".score1").innerHTML = score1;
    document.querySelector(".score2").innerHTML = score2;
    document.querySelector(".title").innerHTML = "Dadad is the Champion!";
  }

  // if(gameRound >= 4) {
  //   gameRound = 0;
  // }
}
 // GLOBAL SCORE VARIABLE
var score1 = 0;
var score2 = 0;
var gameRound = 0;
const champion = "the champion";
const wordChamp ="champion";

//START of LAYOUT
// function onStartUp() {
//       document.querySelector(".score1").innerHTML = score1;
//       document.querySelector(".score1").innerHTML = score2;
//
//   }
//   window.onload = onStartUp;

// PLAY BUTTON LOGIC
function playBtn(){
  gameRound = gameRound + 1;
  // Player 1 Images
  var randomNumber1 = Math.floor(Math.random(6) * 6 + 1);
  var randomImage1 = "images/dice"  + randomNumber1 + ".png";
  var imageSource1 = document.querySelectorAll("img")[0];
  imageSource1.setAttribute("src", randomImage1)

// Player 2 images

  var randomNumber2 = Math.floor(Math.random(6) * 6 + 1);
  var randomImage2 = "images/dice" + randomNumber2 + ".png";
  var imageSource2 = document.querySelectorAll("img")[1];
  imageSource2.setAttribute("src", randomImage2);


// CONDITIONS

  if(randomNumber1 > randomNumber2){
    score1 = score1 += 1;
    document.querySelector(".score1").innerHTML = score1;
    document.querySelector(".title").innerHTML = "Dadad is the winner for Round " + gameRound + "!";
    document.querySelector(".title").style.fontSize = "5rem";
    document.querySelector(".title").style.padding = "2% 18%";

  }
  else if(randomNumber2 > randomNumber1){
    score2 = score2 += 1;
    document.querySelector(".score2").innerHTML = score2;
    document.querySelector(".title").innerHTML = "Rane is the winner for Round " + gameRound + "!";
    document.querySelector(".title").style.padding = "2% 18%";
    document.querySelector(".title").style.fontSize = "5rem";

  }
  else if(randomNumber1 === randomNumber2 && score1 < 4){
   document.querySelector(".title").innerHTML = "It's a DRAW for Round " + gameRound + "!";
   document.querySelector(".title").style.padding = "2% 20%";
   document.querySelector(".title").style.fontSize = "5rem";

 }
 else if(randomNumber1 === randomNumber2 && score2 < 4){
  document.querySelector(".title").innerHTML = "It's a DRAW for Round " + gameRound + "!";
  document.querySelector(".title").style.padding = "2% 20%";
  document.querySelector(".title").style.fontSize = "5rem";

}
  // // CHAMPION
  if(score2 > 4 && score2 > score1 && champion.includes(wordChamp)){
    score1 = 0;
    score2 = 0;
    gameRound = 0;

    document.querySelector(".score1").innerHTML = score1;
    document.querySelector(".score2").innerHTML = score2;
    document.querySelector(".title").innerHTML = "Rane is the Champion!";

  }
  else if(score1 > 4 && score1 > score2 && champion.includes(wordChamp)){
    score1 = 0;
    score2 = 0;
    gameRound = 0;
    document.querySelector(".score1").innerHTML = score1;
    document.querySelector(".score2").innerHTML = score2;
    document.querySelector(".title").innerHTML = "Dadad is the Champion!";
  }

  // if(gameRound >= 4) {
  //   gameRound = 0;
  // }
}
