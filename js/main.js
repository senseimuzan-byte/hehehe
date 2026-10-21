const btnbars = document.querySelector(".btn-icon");
const sidebar = document.querySelector(".sidebar");
const icon = document.querySelector('.icon-active');


btnbars.addEventListener("click", () => {
    sidebar.classList.toggle('active');
})
document.addEventListener("click", (e) => {
    const tidakNavbar = sidebar.contains(e.target);
    const tidakBtn = btnbars.contains(e.target);

    if (!tidakNavbar && !tidakBtn) {
        sidebar.classList.remove("active");
    }
})

