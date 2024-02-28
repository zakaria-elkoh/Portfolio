
// ================ start the auto writer
const writer = document.getElementById("writer")

let text = "Developer"
let textArray = text.split("")

let currentSlice = textArray.length
let arrayLength = textArray.length


function removeIt() {
    
    const removeInt = setInterval( () => {
        currentSlice--
        if (currentSlice === 0) {
            addIt()
            clearInterval(removeInt)
        } 
        
        writer.innerText = textArray.slice(0, currentSlice).join("")
    }, 200);

}

removeIt()

function addIt() {

    const addInt = setInterval(() => {
        writer.innerText += textArray[currentSlice]
        if (currentSlice === textArray.length - 1) {
            clearInterval(addInt)
            setTimeout(() => {removeIt()}, 2000);
        }
        
        currentSlice++;
        
    }, 330);

}
// ================ the end of the auto writer




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





// ================ lis of the nav
const navItems = document.querySelectorAll("nav ul li")

// function scroollToTop() {
//     setTimeout(() => {
//         window.scrollBy({left: 0, top: -70})
//     }, 350);
// }

// navItems.forEach((el) => {
//     el.addEventListener("click", () => {
//         // navItems.forEach((li) => {li.classList.remove("active")})
//         // liEl.classList.add("active")
//         ul.classList.remove("active");
//         menuIcon.classList.add("fa-bars");
//         menuIcon.classList.remove("fa-x");

//         // setTimeout(() => {
//         //     scroollToTop()
//         // }, 400);

//     });
// });



const sections = document.querySelectorAll(".section")

window.onscroll = function () {
    
    sections.forEach((sec) => {
        let id = sec.getAttribute("id")
        let secoffset = sec.offsetTop;
        let height = sec.offsetHeight;
        let windowoffset = window.scrollY;
        
        if(windowoffset + 380 >= secoffset) {

            document.querySelectorAll("ul li").forEach( (el) => {
                el.classList.remove("active");
                document.querySelector("nav li[id=to" + id + "]").classList.add("active");
            })
        }

    })

}

// ================ the end of the lis of the nav






// ================ back to top button
const backToTopBtn = document.querySelector(".back-to-top")

window.addEventListener("scroll", function () {
    if(this.scrollY > 600) {
        backToTopBtn.style.display = "grid";
    } else {
        backToTopBtn.style.display = "none";
    }
})

backToTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
// ================ the end of back to top button





// ================ fix the nav on scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if(this.scrollY > 80) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}) 
// ================ the end of fixing the nav on scroll






// ================ the start of the colors settings
const sittingIcon = document.querySelector(".sitting-icon")
const sittings = document.querySelector(".sittings")
const icon = document.querySelector(".sitting-icon i")

const sittingWrapper = document.querySelector(".sittings-wrapper")

// sittingIcon.addEventListener("click", () => {
//     sittings.classList.toggle("active")
//     icon.classList.toggle("active")
//     if(sittings.classList.contains("active")) {
//         sittingWrapper.classList.add("active")
//     } else {
//         sittingWrapper.classList.remove("active")
//     }
// })

// sittingWrapper.addEventListener("click", () => {
//     sittings.classList.remove("active")
//     icon.classList.remove("active")
//     sittingWrapper.classList.remove("active")
// })


const colors = document.querySelectorAll(".colors li")
const logo = document.getElementById("logo")
let root = document.querySelector(":root")


function setColor(primaryClr, hoverClr, logoSrc) {
    root.style.setProperty('--primary-clr', primaryClr)
    root.style.setProperty('--hover-clr', hoverClr)
    logo.src = `./imgs/logo/logo-${logoSrc}.png`
}

colors.forEach((e) => {
    e.addEventListener("click", () => {
        const primaryClr = e.getAttribute("data-primary-clr")
        const hoverClr = e.getAttribute("data-hover-clr")
        const logoSrc = e.getAttribute("data-logo-type")
        setColor(primaryClr, hoverClr, logoSrc)
    } )
})

// ================ the end of the colors settings






// ===================== start the root

// let root = document.querySelector(":root")
// let testingColors = document.querySelectorAll(".test")

// testingColors.forEach((t) => {
//     t.addEventListener("click", () => {
//         console.log(t.getAttribute("data-clr"))
//         console.log(root)
//         root.style.setProperty('--primary-clr', t.getAttribute("data-clr"))
//     })
// })

// ===================== the end of the root






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