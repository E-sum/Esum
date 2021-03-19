/*Javascript for SUMX
    Created by Vyanna Hill,_____,___,
    Please comment around your work with your name
*/

// Button functionality, Vyanna
var visText= document.getElementById("more");
var button=document.getElementById("btn");
visText.style.display="none";
//We set the instructions to invisible until user clicks button

document.getElementById("btn").onclick=function(){
    if(button.innerHTML=="See More"){
        visText.style.display="inline";
        button.innerHTML="See Less";
    }else{
        visText.style.display="none";
        button.innerHTML="See More";
    }
    //When User clicks button the first time, Instructions are revealed and button text is rewritten to See less
    //When the User want to hide them again, the click will hide them and See More appears on the button again
}
//Button Func, Vyanna


// Functionality for Sign in. It will take User's input and create a query for User's info