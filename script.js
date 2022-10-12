function validation() {
    var res = true;
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    var span = document.getElementById("span");
    var spanchar=document.getElementById("spanchar");

    var passlength=password.value.length;
    // var pattern= /^[a-zA-Z ]+$/;
    var char=document.getElementById("char");

    if (firstname.value == ""  ) {
        firstname.style.border = "1px solid red";
        res = false;
    } else {
        firstname.style.border = "1px solid transparent";
        localStorage.setItem("firstname",firstname.value);
    

    }
    
    if (lastname.value == "") {
        lastname.style.border = "1px solid red";
        res = false;
    }
    else {
        lastname.style.border = "1px solid transparent";
        localStorage.setItem("lastname", lastname.value);

    }

  

    if (email.value == "") {
        email.style.border = "1px solid red";
        res = false;
    }
    else {
        email.style.border = "1px solid transparent";
        localStorage.setItem("email", email.value);

    }

    if (password.value == "" ) {
        password.style.border = "1px solid red";
        res = false;
       
    }
    else {
        password.style.border = "1px solid transparent";
        localStorage.setItem("password", password.value);



    }
    if( passlength<=8)
    {
        char.style.display="inline";
        res = false;
        
    }else{
        char.style.display="none";

    }

    if (confirm.value == "") {
        confirm.style.border = "1px solid red";
        res = false;
    }
    else {
        confirm.style.border = "1px solid transparent";
    }
    if (confirm.value !== password.value) {
        span.style.display = "inline";
        res = false;
    }
    else {
        span.style.display = "none";

    }




    return res;
}
