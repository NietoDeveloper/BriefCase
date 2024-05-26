let copybtn = document.getElementById("copy-btn");
let link = document.getElementById("link");

copybtn.onclick = function () {
    navigator.clipboard.writeText(link.innerHTML);
    copybtn.innerHTML = "Copied"
    setTimeout(function (){
        copybtn.innerHTML = "Copy"
    }, 2000)
}