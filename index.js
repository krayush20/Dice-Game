var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomDice1Image = "dice" + randomNumber1 + ".png";
var randomImage1Source = "images/" + randomDice1Image;

document.querySelectorAll("img")[0].setAttribute("src", randomImage1Source);

var randomNumber2 = Math.floor((Math.random()*6)+1);
var randomDice2Image = "dice" + randomNumber2 + ".png";
var randomImage2Source = "images/" + randomDice2Image;

document.querySelectorAll("img")[1].setAttribute("src", randomImage2Source);



if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩!"
}
else{
    document.querySelector("h1").innerHTML = "Draw! Refresh again."
}
