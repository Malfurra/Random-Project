const menuIcon = document.getElementById('menuIcon')
const menuList = document.getElementById('menuList')

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden")
})