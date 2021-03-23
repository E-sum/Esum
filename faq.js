/*Javascript for Esum
Created by Vyanna Hill
    Usage is for the log in "page" of Esum
*/
var visText= document.getElementById("more");
var button=document.getElementById("btn");
visText.style.display="none";
//We set the instructions to invisible

button.addEventListener("click",function(){
    if(button.innerHTML=="See More"){
        visText.style.display="inline";
        button.innerHTML="See Less";
    }else{
        visText.style.display="none";
        button.innerHTML="See More";
    }
    //When User clicks button the first time, Instructions are revealed and button rewritten to See less
    //When the User want to hide them again, the click will hide them and See More appears on the button again
});
