// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggleBtn = document.querySelector(".sidebar_toggle");
const closeBtn = document.querySelector(".close_btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show_sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show_sidebar");
});
