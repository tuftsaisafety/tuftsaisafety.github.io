document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  function closeOnOutsideClick(event) {
    if (!links.contains(event.target) && !toggle.contains(event.target)) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.removeEventListener("click", closeOnOutsideClick);
    }
  }

  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (isOpen) {
      setTimeout(function () {
        document.addEventListener("click", closeOnOutsideClick);
      }, 0);
    } else {
      document.removeEventListener("click", closeOnOutsideClick);
    }
  });

  // Close menu when a link is clicked
  links.addEventListener("click", function (e) {
    var target = e.target;
    if (target && target.tagName === "A" && links.classList.contains("open")) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.removeEventListener("click", closeOnOutsideClick);
    }
  });
});
