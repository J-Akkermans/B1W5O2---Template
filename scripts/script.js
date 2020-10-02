var x = document.getElementById("blogTitelPost");
var y = document.getElementById("blogTextPost");
var z = document.getElementById("blogContainer");
var xyz = document.getElementById("containerBlog");
function blogPostUpload() {
    var BLOGTITLE = document.getElementById("blogTitle").value;
    var BLOGTEXT = document.getElementById("blogText").value;
    console.log(BLOGTEXT);
    if (BLOGTITLE != "" && BLOGTITLE != "") {
        document.getElementById("containerBlog").classList.remove("dnone");
        x.innerHTML = BLOGTITLE;
        y.innerHTML = BLOGTEXT;
    } else {
        alert("Make sure both fields are filled.")

    }
}

var msgTitle = document.getElementById("");
function sendMsg(){
    
}