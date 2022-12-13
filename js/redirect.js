//<![CDATA[
//Script Redirect CTRL + U
function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace("https://www.instagram.com/mivns_/");
        return false;
    }
}
document.onkeydown = redirectCU;
//]]>