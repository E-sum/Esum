/*Javascript for Esum
By Vyanna Hill, Braddy Madden
  VY:  Gave functionality to the button of login, when clicked log in button is click, the home screen appears
*/


//Cleaned up, gave better var names and gave functionality to added buttons, Brady Madden


var btnSign = document.getElementById("btnLog");//Login Button
var welcome = document.getElementById("welcome");//sucessful login label
var forgotpassbtn = document.getElementById("ForgotPass");//Forgot Password Button
var eLabel = document.getElementById("elabel");//Labels for email and pass
var pLabel = document.getElementById("plabel");
var eMail = document.getElementById("email");
var pass = document.getElementById("password");

var btnC = document.getElementById("btnCC");
var btn1 = document.getElementById("btn1t1");
var btnOrg = document.getElementById("btnOrg");
var btnDel = document.getElementById("btnDel");
//Buttons for chat nav.

//Dont Display these buttons when not logged in
btn1.style.display = "none";
btnOrg.style.display = "none";
btnC.style.display = "none";
btnDel.style.display = "none";


welcome.innerHTML = "Sign In";
plabel.style.display = "inLine";
//add login event

btnSign.addEventListener("click", function () {
    //Needs a if statment that checks email with a find query. if email is used AND in database, continue on home page.
    // else, send a alert to webpage
   
   
    if (btnSign.innerHTML == "Login") {
        //When logged in, hide all login info and display buttons
        forgotpassbtn.style.display = "none";
        eMail.style.display = "none";
        pass.style.display = "none";
        btnSign.innerHTML = "Logout";
        eLabel.style.display = "none";
        pLabel.style.display = "none";
        

        // Greet logged in User with database options
        welcome.innerHTML = "Hello, " + eMail.value;
        btnC.style.display = "inLine";
        btn1.style.display = "inLine";
        btnOrg.style.display = "inLine";
        btnDel.style.display = "inLine";
        //These options above are all options for admin user.
        //Later on when contected, Flied of isAdmin will be check to block non admins option of delete

    } else {
        //When user "signs out", Hide logged in functions and "return" to home page
        eMail.style.display = "inLine";
        pass.style.display = "inLine";
        eLabel.style.display = "inLine";
        pLabel.innerHTML = "Password:";
        pLabel.style.display = "inLine";
        welcome.innerHTML = "Sign In";
        forgotpassbtn.style.display = "inLine";
        btnSign.innerHTML = "Login";
        
        btn1.style.display = "none";
        btnOrg.style.display = "none";
        btnC.style.display = "none";
        btnDel.style.display = "none";
    }
});


