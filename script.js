// ============================================
// Orbit — простые интерактивные скрипты
// ============================================

document.addEventListener("DOMContentLoaded", () => {
    initSubscribeForm();
    initSmoothScroll();
});

/* ============ Форма подписки ============ */
function initSubscribeForm() {
    const form = document.getElementById("subscribe-form");
    if (!form) return;

    const emailInput = form.querySelector("#email");
    const message = form.querySelector(".form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const value = emailInput.value.trim();

        // Простая проверка email регуляркой
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!value) {
            showMessage("Введите email", "error");
            emailInput.focus();
            return;
        }

        if (!emailRegex.test(value)) {
            showMessage("Похоже, email введён неверно", "error");
            emailInput.focus();
            return;
        }

        // Имитация успешной отправки
        showMessage("✅ Готово! Проверьте почту — там письмо от Orbit.", "success");
        form.reset();
    });

    function showMessage(text, type) {
        message.textContent = text;
        message.classList.remove("success", "error");
        message.classList.add(type);
    }
}

/* ============ Плавный скролл по якорям ============ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            if (targetId === "#" || targetId.length < 2) return;

            const target = document.querySelector(targetId);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}