/*Javascript for Esum
Created by Vyanna Hill
Give functionality to the button of Faq page
*/
//Cleaned up, gave better var names and gave functionality to added buttons, Brady Madden
//Login Button
var btnSign=document.getElementById("btnLog");
//sucessful login label
var welcome=document.getElementById("welcome");
//Forgot Password Button
var forgotpassbtn=document.getElementById("ForgotPass");
//Labels for email and pass
var eLabel=document.getElementById("elabel");
var pLabel=document.getElementById("plabel");
//stores email and pass values
var eMail=document.getElementById("email");
var pass=document.getElementById("password");
//Buttons for chat nav.
var btnC=document.getElementById("btnCC");
var btn1=document.getElementById("btn1t1");
var btnOrg=document.getElementById("btnOrg");
var btnDel=document.getElementById("btnDel");
//Dont Display these buttons when not logged in
btn1.style.display="none";
btnOrg.style.display="none";
btnC.style.display="none";
btnDel.style.display="none";
//forgot pass button next to Login button 
forgotpassbtn.style.display="inLine";
welcome.innerHTML="Sign In";
plabel.style.display="inLine";
//add login event
btnSign.addEventListener("click",function(){
 //Need a if statment that checks , email is used AND in database. else, send a alert to page
    if(btnSign.innerHTML=="Login"){
       //When logged in, hide login info and display buttons as well as welcome message
        forgotpassbtn.style.display="none";
        eMail.style.display="none";
        pass.style.display="none";
        btnSign.innerHTML="Logout";
        eLabel.style.display="none";
        pLabel.style.display="none";
        welcome.innerHTML="Hello, "+eMail.value;
        // Greet logged in User with database options, hide the log information 
        btnC.style.display="inLine";
        btn1.style.display="inLine";
        btnOrg.style.display="inLine";
        btnDel.style.display="inLine";
       //options for a Admin user will appear
    }else{
        //put labels inline and hide buttons again when logged out
        eMail.style.display="inLine";
        pass.style.display="inLine";
        eLabel.style.display="inLine";
        pLabel.innerHTML="Password:";
        pLabel.style.display="inLine";
        welcome.innerHTML="Sign In";
        forgotpassbtn.style.display="inLine";
        //redisplays login button
        btnSign.innerHTML="Login";
        //When user "signs out", Hide logged in functions and "return" to home page
        btn1.style.display="none";
        btnOrg.style.display="none";
        btnC.style.display="none";
        btnDel.style.display="none";
    }
});
