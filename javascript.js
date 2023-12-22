 function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
function changeCustomColors() {
    var textColor = prompt("Enter text color (e.g., red, blue, #FF0000):");
    var bgColor = prompt("Enter background color (e.g., yellow, green, #00FF00):");
    
    if (textColor && bgColor) {
        document.body.style.color = textColor;
        document.body.style.backgroundColor = bgColor;
    } else {
        alert("Please enter valid colors.");
    }
}