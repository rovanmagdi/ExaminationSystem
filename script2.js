function validation() {
    var res = true;
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var spanemail=document.getElementById("spanemail");
    var spanpass=document.getElementById("spanpass");



    if (email.value !== localStorage.getItem("email")) {
        console.log("noEm");
        spanemail.style.display="inline"
        res = false;

    }

    else {
        console.log("yesEm");
        spanemail.style.display="none"

    }

    if (password.value !== localStorage.getItem("password")) {
        console.log("noPass");
        spanpass.style.display="inline"

        res = false;
    }

    else {
        console.log("yesPass");
        spanpass.style.display="none"

    }

    return res;


}
function preventBack() {
    window.history.forward(); 
}
  
setTimeout("preventBack()", 0);
  
