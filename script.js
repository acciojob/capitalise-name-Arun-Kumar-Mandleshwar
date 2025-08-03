//your JS code here. If required.
document.getElementById("fname").addEventListener("focusout", myFunction);
function myfunction() {
document.getElementById('fname').value= 
	  document.getElementById('fname').value.toUpperCase();

}