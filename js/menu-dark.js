


// ================ menu 
const menuIcon = document.querySelector(".menu-icon")

const ul = document.querySelector("nav ul")

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active")
    menuIcon.classList.toggle("fa-bars")
    menuIcon.classList.toggle("fa-x")
    ul.classList.toggle("active")
})
// ================ the end of menu 




// ===================== start the dark mode

const darkModeToggle = document.querySelector(".dark-mode-toggle")

if(localStorage.getItem("mode") === "dark") {
    logo.src = `./imgs/logo/logo-white.png`
    document.body.classList.add("dark-mode")
    darkModeToggle.checked = true
}

darkModeToggle.addEventListener("click", () => {

    if (darkModeToggle.checked === true) {
        localStorage.setItem("mode", "dark")
        document.body.classList.add("dark-mode")
        logo.src = `./imgs/logo/logo-white.png`
    } else {
        localStorage.setItem("mode", "light")
        document.body.classList.remove("dark-mode")
        logo.src = `./imgs/logo/logo-orange.png`
    }

})

// ===================== the end of the dark mode