// need to, on key event, check inputs of password and confirm password.
// if passwords don't match, check to see if password div has error class, if not, give it


let pass="", cPass ="";

function refresh() {
    let pass = document.getElementById("password").value;
    let cPass = document.getElementById("c-password").value;
    console.log(pass);

    let passTag = document.getElementById("password");
    let cPassTag = document.getElementById("c-password");

    if (pass == cPass) {
        document.getElementById("mismatch").innerHTML = "";
        if (passTag.classList.contains("error")) passTag.classList.remove("error");
        if (cPassTag.classList.contains("error")) cPassTag.classList.remove("error");
    }

    else {
        document.getElementById("mismatch").innerHTML = "Passwords must match!";
        if (!passTag.classList.contains("error")) passTag.classList.add("error");
        if (!cPassTag.classList.contains("error")) cPassTag.classList.add("error");
    }

}


window.addEventListener("keyup", (event)=>{refresh();});