let windowHeight = window.innerHeight;
const paragraph = document.querySelector("#make-it-pop")
const overlay = document.querySelector(".overlay")

function overlayAfterScroll(start, height, element){
    if(start < height && start > 0) {
        element.classList.add("active")
        overlay.style.opacity = "1";
    }else{
        element.classList.remove("active")
        overlay.style.opacity = "0";
    }
}

window.addEventListener("scroll", () => {
    overlayAfterScroll( paragraph.getBoundingClientRect().top, windowHeight, paragraph)
})

