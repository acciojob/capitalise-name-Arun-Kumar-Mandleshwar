//your JS code here. If required.
document.getElementById("fname").addEventListener("focusout", myFunction);
function myfunction() {
let textField=document.getElementById('fname');
let content=textField.value;
content=content.toUpperCase();
textField.value=content;
}