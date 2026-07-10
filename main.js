document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("消息已发送！谢谢联系。");
        });
    }
});
