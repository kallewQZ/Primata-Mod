const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu a");

// Abre/fecha o menu ao clicar no botão
menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
});

// Fecha o menu e rola até a seção correspondente
menuItems.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault(); // Impede o comportamento padrão do link

        const targetId = item.getAttribute("href").substring(1); // Remove o #
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até a seção
        }

        // Fecha o menu
        menuToggle.classList.remove("active");
        menu.classList.remove("active");
    });
});
