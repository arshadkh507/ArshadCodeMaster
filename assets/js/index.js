/*
==========================================================
 Sidebar Toggling
==========================================================*/
// toggle active class on sidebar-toggle button
const toggleButton = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

// toggle sidebar on sidebar-toggle button
toggleButton.addEventListener("click", function () {
  sidebar.classList.toggle("open");
});

/*
==========================================================
 Theme Toggling
==========================================================*/

// get the theme toggle element
const themeToggle = document.getElementById("theme-toggle");
const themeText = document.getElementById("text");
const body = document.querySelector("body");

// add a click event listener to the theme toggle element
themeToggle.addEventListener("click", () => {
  // toggle the 'bg-dark' and 'bg-white' classes on the body element
  body.classList.toggle("bg-dark");
  body.classList.toggle("bg-white");

  // toggle the icon between sun and moon
  const icon = themeToggle.querySelector(".icon i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");

  // toggle the text between 'Theme', 'Dark', and 'Light'
  const currentText = themeText.textContent;
  if (currentText === "Theme") {
    themeText.textContent = "Dark";
  } else if (currentText === "Dark") {
    themeText.textContent = "Light";
  } else {
    themeText.textContent = "Theme";
  }
});

/*
==========================================================
 Active li on clicking
==========================================================*/

const listItem = document.querySelectorAll(".sidebar_inner li");

listItem.forEach((li) => {
  li.addEventListener("click", () => {
    listItem.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});
