// Initialize AOS
AOS.init({
    duration: 1200,
})

// Script Lain
document.getElementById("chooseConfirmTamu").onchange = function() {
    if (this.value == "Hadir") {
        document.getElementById("chooseNumberTamu").disabled = false;
    } else {
        document.getElementById("chooseNumberTamu").disabled = true;
    }
}

// Smooth Scroll Usage
var scroll = new SmoothScroll('a[href*="#"]');