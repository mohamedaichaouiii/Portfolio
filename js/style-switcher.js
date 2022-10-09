const styleSwitcherToggle= document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll", () => {
    if( document.querySelector(".style-switcher").classList.contains("Open"))
    {
        document.querySelector(".style-switcher").classList.remove("Open");
    }
})
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
 {
    alternateStyles.forEach((style) => {

        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");

        }
        else
        {
            style.setAttribute("disabled","true");
        }

    })
};