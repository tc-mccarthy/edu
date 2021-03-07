document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    const close_buttons = document.querySelectorAll(".dot .close");

    dots.forEach(dot => {
        dot.addEventListener("click", ev => {
            ev.preventDefault();
            const clicked_dot = ev.target.closest(".dot");

            if (clicked_dot.classList.contains("active")) {
                clicked_dot.classList.remove("active");
            } else {
                clicked_dot.classList.add("active");
            }
        });
    });
});