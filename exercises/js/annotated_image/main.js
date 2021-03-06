document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".dot");
    const close_buttons = document.querySelectorAll(".dot .close");

    dots.forEach(dot => {
        dot.addEventListener("click", ev => {
            ev.preventDefault();
            const clicked_dot = ev.target.closest(".dot");
            clicked_dot.classList.add("active");
        });
    });

    close_buttons.forEach(close_button => {
        close_button.addEventListener("click", e => {
            const clicked_dot = e.target.closest(".dot");

            if (clicked_dot.classList.contains("active")) {
                e.preventDefault();
                e.stopPropagation();

                clicked_dot.classList.remove("active");
            }
        });
    });
});