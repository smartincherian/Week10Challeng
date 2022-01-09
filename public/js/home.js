var mail=document.getElementById("mail");
var fb=document.getElementById("feedback");

console.log(mail);

function validate(){

    var myMail=mail.value;
    var regexMail= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{1,3})([.a-zA-Z]{2,10})$/

    if(regexMail.test(myMail)){
        fb.innerHTML="Valid e-mail id";
        fb.style.color="green";
        fb.style.visibility-"visible";
        return true;
        }
            else{
            fb2.style.visibility="visible";
            return false;
            }

    }
