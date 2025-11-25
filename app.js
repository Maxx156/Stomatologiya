const supportForm = document.getElementById("support-form");
const supportStatus = document.getElementById("support-status");

if (supportForm && supportStatus) {
    supportForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(supportForm);
        const name = formData.get("name");

        supportStatus.textContent = "Отправляем сообщение...";

        setTimeout(() => {
            supportStatus.textContent = `Спасибо, ${name}! Мы ответим на ваш запрос в течение дня.`;
            supportForm.reset();
        }, 900);
    });
}

const highlightActiveNav = () => {
    const navLinks = document.querySelectorAll(".top-nav__links a");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    navLinks.forEach((link) => {
        const linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.classList.add("active-link");
        }
    });
};

highlightActiveNav();

