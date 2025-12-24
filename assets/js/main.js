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

    // Fellowship toggle functionality
    var fellowshipToggles = document.querySelectorAll(".fellowship-toggle");
    if (fellowshipToggles.length > 0) {
        fellowshipToggles.forEach(function (btn) {
            btn.addEventListener("click", function () {
                var fellowshipType = this.getAttribute("data-fellowship");
                var container = this.closest(".fellowship-container") || document;
                var allDetails = container.querySelectorAll(".fellowship-details");
                var allButtons = container.querySelectorAll(".fellowship-toggle");

                // Remove active class from all buttons
                allButtons.forEach(function (b) {
                    b.classList.remove("active");
                });
                // Hide all details
                allDetails.forEach(function (d) {
                    d.style.display = "none";
                });

                // Activate clicked button and show corresponding details
                this.classList.add("active");
                var targetDetails = document.getElementById(fellowshipType + "-details");
                if (targetDetails) {
                    targetDetails.style.display = "block";
                }
            });
        });
    }
});
