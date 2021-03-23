/*Javascript for Esum
Created by Vyanna Hill
Give functionality to the button of Faq page
*/


var btnSign=document.getElementById("btnLog");
var label=document.getElementById("label");
var eMail=document.getElementById("email");
var btnC=document.getElementById("btnCC");
var btn1=document.getElementById("btn1t1");
var btnOrg=document.getElementById("btnOrg");
var btnDel=document.getElementById("btnDel");
var welcome=document.getElementById("welcome");
/// Any ids used in the aside function

btn1.style.display="none";
btnOrg.style.display="none";
btnC.style.display="none";
btnDel.style.display="none";
//hide all the log in options 

btnSign.addEventListener("click",function(){
    //Need a if statment that checks , email is used AND in database. else, send a alert to page

    if(btnSign.innerHTML=="Log In"){
        eMail.style.display="none";
        btnSign.innerHTML="Log out";
        label.style.display="none";
        welcome.innerHTML="Hello, "+eMail.value;
            // Greet logged in User with database options, hide the log information 

        btnC.style.display="inLine";
        btn1.style.display="inLine";
        btnOrg.style.display="inLine";
        btnDel.style.display="inLine";
            //options for a Admin user will appear
    }else{
        label.style.display="inLine";
        btn1.style.display="none";
        btnOrg.style.display="none";
        btnC.style.display="none";
        btnDel.style.display="none";
        //When user "signs out", Hide logged in functions and "return" to home page

        welcome.innerHTML="";
        eMail.style.display="inLine";
        btnSign.innerHTML="Log In";

    }
   

});



