const image = document.querySelector("#profile img")
const html = document.documentElement

function toggleMode() {
   html.classList.toggle("light")

   if (html.classList.contains("light")) {
      image.setAttribute("src", "./src/assets/images/avatar-light.png")
      localStorage.setItem("theme", "light")

   } else {
      image.setAttribute("src", "./src/assets/images/avatar-dark.png")
      localStorage.setItem("theme", "dark")
   }
}

function loadTheme() {
   const savedTheme = localStorage.getItem("theme")

   if (savedTheme === "light") {
      html.classList.add("light")
      image.setAttribute("src", "./src/assets/images/avatar-light.png")
      
   } else {
      html.classList.remove("light")
   }
}

loadTheme()