//JS Vanilla
document.getElementById("btnJS").addEventListener("click", function (){
    document.getElementById("title").textContent = "Change using JavaScript"
});

//JQ
$(document).ready(function(){
    $("#btnJQ").click(function(){
        $("#title").text("Change using JQuery");
    });
});

//JS Vanilla for Excercise 2
window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("toggleJS").addEventListener("click", function(){
        var content = document.getElementById("content");
        if (content.style.display == "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
        });
    });

//JQ
$(document).ready(function(){
    $("#toggleJQ").click(function(){
        $("#content").toggle();
    });
});

