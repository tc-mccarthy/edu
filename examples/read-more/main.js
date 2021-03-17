document.addEventListener("DOMContentLoaded", function(e) {
    // generate a NodeList of all readmore buttons on the page
    const read_more_buttons = document.querySelectorAll(".readmore .expand");

    // iterate through the readmore buttons
    read_more_buttons.forEach(function(button) {
        // attach a click event listener to each readmore button
        button.addEventListener("click", function(e) {
            e.preventDefault(); // prevent the default behavior for a click on the button

            // find the readmore container this readmore button resides within
            const readmore_container = e.target.closest(".container.readmore");

            // determine the scroll height of the content within the box (how tall the content is when it isn't being cut off by our CSS)
            const scrollHeight = readmore_container.scrollHeight;

            // add the active class to the container to make the readmore gradient and button disappear
            readmore_container.classList.add("active");

            // update the maxHeight to be the height of the content. This will set off the animation that reveals the rest of the content
            readmore_container.style.maxHeight = `${scrollHeight}px`;
        });
    })
});