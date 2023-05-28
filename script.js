function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/profile/avatar-lightmode.png")
    img.setAttribute(
      "alt",
      "Foto de Mauricio Inhaia de oculos escuros, barba e jaqueta preta."
    )
  } else {
    img.setAttribute("src", "./assets/profile/avatar-darkmode.png")
    img.setAttribute(
      "alt",
      "Foto de Mauricio Inhaia observando algo, de oculos, barba e camisa preta."
    )
  }
}
