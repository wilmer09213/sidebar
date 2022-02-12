let sidebar = document.getElementsByClassName("sidebar")[0];
let text = document.getElementsByClassName("icon-name");

sidebar.addEventListener("click", function(e) {
    console.log(text)
    if(e.target.id == "sidebar") {
        sidebar.classList.toggle("expand");
        
        for(let i = 0; i < text.length; i++) {
            text[i].classList.toggle("show");
        }
        
    }
})