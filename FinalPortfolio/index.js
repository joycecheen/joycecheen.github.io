var div1 = document.getElementById("div1");
div1.addEventListener("dblclick", function() {
    window.location = "sec1.html";
});

var div2 = document.getElementById("div2");
div2.addEventListener("dblclick", function() {
    window.location = "sec2.html";
});

var div3 = document.getElementById("div3");
div3.addEventListener("dblclick", function() {
    window.location = "sec3.html";
});

function basicPopup(url) {
    popupWindow = window.open(url,'popUpWindow','height=300,width=700,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
}