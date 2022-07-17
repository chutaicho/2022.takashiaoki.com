// import { sha256 } from 'js-sha256';
let _messageCreated = false;
function showMessage(){
    if(_messageCreated) return;
    let pa = document.getElementById("pwd-area");
    const message = document.createElement('p'); 
    message.innerText = 'Oops, wrong password.';
    pa.appendChild(message);
    _messageCreated = true;
}
const btn = document.getElementById("btn");
const pin = document.getElementById("pin");
// btn.disabled = true;
btn.addEventListener("click", () =>{
    showMessage();
});