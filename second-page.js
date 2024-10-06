// Javascript code for second.html
window.onload = function() {
    // Get the value from localStorage
    var mylat = localStorage.getItem('mylat');
    var mylng = localStorage.getItem('mylng');
    // Display the value on the page
    var output = document.getElementById('value-output');
    output.innerText = mylat;
};