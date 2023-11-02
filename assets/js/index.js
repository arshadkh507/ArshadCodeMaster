// Declare body at the top of your script
const body = document.querySelector("body");


/*
==========================================================
 Burger Menu | Sidebar Toggling
==========================================================*/

document.addEventListener("DOMContentLoaded", function() {
  const burgerMenu = document.getElementById("burger-menu");
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.querySelector(".navbar ul");
  const burgerIcon = document.getElementById("burger-icon");

  burgerMenu.addEventListener("click", function() {
    if (menuToggle.checked) {
      navList.style.right = "-300px"; // Slide out to the right
      burgerIcon.querySelector("i").classList.remove("fa-xmark");
      burgerIcon.querySelector("i").classList.add("fa-bars");
    } else {
      navList.style.right = "0"; // Slide in from the right
      burgerIcon.querySelector("i").classList.remove("fa-bars");
      burgerIcon.querySelector("i").classList.add("fa-xmark");
    }
  });
});







// document.addEventListener("DOMContentLoaded", function() {
//   const burgerMenu = document.getElementById("burger-menu");
//   const menuToggle = document.getElementById("menu-toggle");
//   const navList = document.querySelector(".navbar ul");
//   const burgerIcon = document.getElementById("burger-icon");

//   burgerMenu.addEventListener("click", function() {
//     if (menuToggle.checked) {
//       navList.style.right = "0"; // Slide in from the right
//       burgerIcon.classList.add("open");
//     } else {
//       navList.style.right = "-300px"; // Slide out to the right
//       burgerIcon.classList.remove("open");
//     }
//   });
// });






/*
==========================================================
 Sidebar Toggling
==========================================================*/
// toggle active class on sidebar-toggle button
// const toggleButton = document.querySelector(".sidebar-toggle");
// const sidebar = document.querySelector(".sidebar");

// toggleButton.addEventListener("click", () => {
//   toggleButton.classList.toggle("active");
// });

// // toggle sidebar on sidebar-toggle button
// toggleButton.addEventListener("click", function () {
//   sidebar.classList.toggle("open");
// });


/*
==========================================================
 Sidebar Closing 
==========================================================*/
// const sidebarLinks = document.querySelectorAll(".sidebar a");


// body.addEventListener("click", (event) => {
//   if (!sidebar.contains(event.target) && !toggleButton.contains(event.target) && window.innerWidth <= 992) {
//     sidebar.classList.remove("open");
//     toggleButton.classList.remove("active");
//   }
// });

// sidebarLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     if (window.innerWidth <= 992) {
//       sidebar.classList.toggle("open");
//     }
//   });
// });

/*
==========================================================
 Theme Toggling
==========================================================*/

// get the theme toggle element
// const themeToggle = document.getElementById("theme-toggle");
// const themeText = document.getElementById("text");

// // add a click event listener to the theme toggle element
// themeToggle.addEventListener("click", () => {
//   // toggle the 'bg-dark' and 'bg-white' classes on the body element
//   body.classList.toggle("bg-dark");
//   body.classList.toggle("bg-white");

//   // toggle the icon between sun and moon
//   const icon = themeToggle.querySelector(".icon i");
//   icon.classList.toggle("fa-sun");
//   icon.classList.toggle("fa-moon");

//   // toggle the text between 'Theme', 'Dark', and 'Light'
//   const currentText = themeText.textContent;
//   if (currentText === "Theme") {
//     themeText.textContent = "Dark";
//   } else if (currentText === "Dark") {
//     themeText.textContent = "Light";
//   } else {
//     themeText.textContent = "Theme";
//   }
// });

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

/*======== JavaScript for smooth scroll effect =================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/*======== Contact Me Section =================*/
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  
  contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // You can add form submission handling here, e.g., sending data to a server
      
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
  });
});
