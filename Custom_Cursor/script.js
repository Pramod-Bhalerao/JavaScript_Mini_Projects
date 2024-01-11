let main = document.querySelector("#main")
let crsr = document.querySelector(".cursor")

main.addEventListener("mousemove", function(stb){
    crsr.style.left = stb.x + "px"
    crsr.style.top = stb.y + "px"
})
