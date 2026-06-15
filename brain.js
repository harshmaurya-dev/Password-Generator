let length = document.getElementById("length");
let value = document.getElementById("lengthValue");

length.oninput = function(){
    value.innerHTML = this.value;
}


function generatePassword(){

    let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(document.getElementById("numbers").checked){
        chars += "0123456789";
    }

    if(document.getElementById("symbols").checked){
        chars += "!@#$%^&*";
    }

    let password="";

    for(let i=0;i<length.value;i++){
        password += chars[Math.floor(Math.random()*chars.length)];
    }

    document.getElementById("password").value=password;
}


function copyPassword(){

    let pass=document.getElementById("password");

    navigator.clipboard.writeText(pass.value);

    alert("Password Copied!");
}