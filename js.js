// const burger = document.getElementById("burger");
// const sidebar = document.getElementById("sidebar");

// burger.addEventListener("click", () => {
//   sidebar.classList.toggle("open");
// });

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("burger").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("burger").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}