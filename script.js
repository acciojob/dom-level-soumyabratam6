//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const targetElement = document.getElementById("level");
    let domLevel = 0;
    
    // Traverse upwards until reaching the root html element
    let currentElement = targetElement;
    while (currentElement.parentNode) {
        currentElement = currentElement.parentNode;
        domLevel++;
    }
    
    // Display the DOM level using alert
    alert("The level of the element is: " + domLevel);
});