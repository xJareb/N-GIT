function borderAddFirst() {
    let divInput1 = document.getElementById("glavni1");
    let divInput2 = document.getElementById("glavni2");
    let divInput3 = document.getElementById("glavni3");
    let divInput4 = document.getElementById("glavni4");
     
    divInput1.style.border="solid brown 3px";
    divInput2.style.border="none";
    divInput3.style.border="none";
    divInput4.style.border="none";
}
function borderAddSecond() {
    let divInput1 = document.getElementById("glavni1");
    let divInput2 = document.getElementById("glavni2");
    let divInput3 = document.getElementById("glavni3");
    let divInput4 = document.getElementById("glavni4");
    
    divInput1.style.border="none";
    divInput2.style.border="solid brown 3px";
    divInput3.style.border="none";
    divInput4.style.border="none";
}
function borderAddThird() {
    let divInput1 = document.getElementById("glavni1");
    let divInput2 = document.getElementById("glavni2");
    let divInput3 = document.getElementById("glavni3");
    let divInput4 = document.getElementById("glavni4");
     
    divInput1.style.border="none";
    divInput2.style.border="none";
    divInput3.style.border="solid brown 3px";
    divInput4.style.border="none";
}
function borderAddFourth(){
    let divInput1 = document.getElementById("glavni1");
    let divInput2 = document.getElementById("glavni2");
    let divInput3 = document.getElementById("glavni3");
    let divInput4 = document.getElementById("glavni4");
     
    divInput1.style.border="none";
    divInput2.style.border="none";
    divInput3.style.border="none";
    divInput4.style.border="solid brown 3px";
}

let ErrorColor="#ff0000";
let CorrectColor="#00FF00";


function test_name() {
    if(!/^[A-Z][a-z]+$/.test(document.getElementById("name").value)){
        document.getElementById("name").style.backgroundColor=ErrorColor;
        return "Error! Incorrect name format.\n"
    }
    else{
        document.getElementById("name").style.backgroundColor=CorrectColor;
        return "";
    }
}
function test_surname() {
    if(!/^[A-Z][a-z]+$/.test(document.getElementById("surname").value)){
        document.getElementById("surname").style.backgroundColor=ErrorColor;
        return "Error! Incorrect surname format.\n"
    }
    else{
        document.getElementById("surname").style.backgroundColor=CorrectColor;
        return "";
    }
}
function test_email() {
    if(!/^[a-z]+([0-9]+)?(\.|\-|\_)?([a-z]+)?@gmail.com$/.test(document.getElementById("email").value)){
        document.getElementById("email").style.backgroundColor=ErrorColor;
        return "Error! Incorrect email format."
    }
    else{
        document.getElementById("email").style.backgroundColor=CorrectColor;
        return "";
    }
}
function sendEmail(){

    let alert_text="";

    alert_text+=test_name();
    alert_text+=test_surname();
    alert_text+=test_email();

   if(alert_text !=""){
        alert(alert_text);
        return;
    }
    let prolaz = true;
    if (prolaz) {
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.body').style.overflowY = 'hidden';
    }
    document.querySelector('.dugmex').addEventListener('click',()=>{
        document.querySelector('.alert').style.display = 'none';
        document.querySelector('.body').style.overflowY = 'visible';
    });
}
