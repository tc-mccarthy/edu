/**
 * Wait for the DOM to be ready
 */

document.addEventListener("DOMContentLoaded", e => {
    const filter_dropdown = document.querySelector(".filter");

    filter_dropdown.addEventListener("change", e => {
        const class_to_show = filter_dropdown.value;

        // first hide all items that are active
        document.querySelectorAll("#fruits .item.active").forEach(i => {
            i.classList.remove("active");
        });

        //then show all items that match the selector
        document.querySelectorAll(`#fruits .item.${class_to_show}`).forEach(i => {
            i.classList.add("active");
        })
    });
});