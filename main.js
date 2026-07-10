document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");
    const toast = document.getElementById("toast");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // 显示 Toast
            if (toast) {
                toast.classList.add("show");

                // 3秒后自动隐藏
                setTimeout(function() {
                    toast.classList.remove("show");
                }, 3000);
            }
        });
    }
});
