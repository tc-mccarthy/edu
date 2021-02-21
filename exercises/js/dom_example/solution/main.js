document.addEventListener("DOMContentLoaded", function(e) {
    const photo_container = document.querySelector(".container.photo");

    // add a click listener to each flexbox item
    document.querySelectorAll(".flexbox .item").forEach(item => {

        // when the item is clicked on
        item.addEventListener("click", ev => {
            // store the `.item` that was clicked on in a variable
            const clicked_item = ev.target.closest(".item");

            // iterate through all active items and remove the active class
            document.querySelectorAll(".flexbox .item.active").forEach(active_element => {
                active_element.classList.remove("active");
            });

            // add an active class to the item we clicked on
            clicked_item.classList.add("active");

            // update the image in the photo container to have the source of the item clicked on
            const new_image_url = clicked_item.querySelector("img").src;
            const new_headline = clicked_item.dataset.headline;
            const new_description = clicked_item.dataset.desc;

            photo_container.querySelector("img").src = new_image_url;
            photo_container.querySelector("h2").innerHTML = new_headline;
            photo_container.querySelector("p").innerHTML = new_description;

        });
    })
});