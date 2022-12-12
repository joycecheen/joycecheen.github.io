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
/*
div1.addEventListener("focus", focusHandler);
function focusHandler() {
    div1.classList.add("highlight");
}

function clickFunction() {
    alert("The div was clicked!");
}

function addClass() {
    
}

/*div1.addEventListener("click", function() {
    
});

function focusDiv() {
    var div1 = document.getElementById("div1");
    div1.focus();
}

/*
function dblclickFunction() {
    window.location = "sec1.html";
}*/