//Dice 1
var randomNumber1=Math.floor(Math.random()*6)+1; //1-6

var diceimage1="dice"+randomNumber1+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",diceimage1);


//Dice 2
var randomNumber2=Math.floor(Math.random()*6)+1; //1-6

var diceimage2="dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",diceimage2);

//h1
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="😁Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="😁Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="😁Draw";
}