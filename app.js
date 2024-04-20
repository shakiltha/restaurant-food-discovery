const menu = document.getElementsByClassName("menu")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
const aside = document.getElementsByClassName("aside")[0];

// if (window.innerWidth > 576 && window.screen.width > 576) {
//   sidebar.style.display = "none";
// }

menu.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.classList.toggle("sidebarExpand");
  if ([...sidebar.classList].includes("sidebarExpand")) {
    aside.style.display = "flex";
  } else {
    aside.style.display = "none";
  }
});
