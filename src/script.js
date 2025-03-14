function toggleMode() {
   const html = document.documentElement
   html.classList.toggle("light")

   const image = document.querySelector("#profile img")

   if (html.classList.contains("light")) {
      image.setAttribute("src", "./src/assets/images/avatar-light.png")
      localStorage.setItem("theme", "light")

   } else {
      image.setAttribute("src", "./src/assets/images/avatar-dark.png")
      localStorage.setItem("theme", "dark")
   }
}

function loadTheme() {
   const html = document.documentElement
   const savedTheme = localStorage.getItem("theme")

   if (savedTheme === "light") {
      html.classList.add("light")
   } else {
      html.classList.remove("light")
   }
}

loadTheme()