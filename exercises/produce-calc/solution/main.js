document.addEventListener("DOMContentLoaded", function() { //DOM Ready
    /**
     * Capture all of the rows except for the totals row
     */
    const item_rows = document.querySelectorAll(".calculator .row:not(.total)");

    /**
     * Iterate through them
     */
    item_rows.forEach(function(row) {
        /**
         * For each row establish an event listener for change and keyup
         * 
         * To keep things DRY, we created a function called item_input_listener that fires for each event
         * This allows the same code to be used for multiple events
         */
        row.querySelector("[name='qty']").addEventListener("change", item_input_listener);
        row.querySelector("[name='qty']").addEventListener("keyup", item_input_listener);
    });
});

/**
 * Fired on qty input
 * 
 * The event is fired when a user types or uses other methods for changing the quantity
 * @param {Event Object} e 
 * @returns 
 */
function item_input_listener(e) {
    const row = e.target.closest(".row"); // trace back the parent row from the qty field that is the source of the event
    let qty = row.querySelector("[name='qty']").value; // capture the value

    if (qty === "") { // if the qty is blank, short circuit the function so there are no errors
        return false;
    }

    qty = parseInt(qty); // if the qty is not blank, ensure it is an integer

    const shops = row.querySelectorAll(".peapod, .freshdirect, .amazon"); //capture the shop containers within this row
    row.classList.add("active"); // make the row active since we've had input

    // for each of the shop containers
    shops.forEach(function(shop) {
        /**
         * capture the price for this item, at this shop, from the data attribute and turn it into a float
         **/
        const price = parseFloat(shop.dataset.price);

        /**
         * Multiply the price by the quantity to get the total
         */
        const total = price * qty;

        /**
         * Update the content of the span in this shop container with a rounded number for the total cost
         */
        shop.querySelector("span").innerHTML = round_number(total);
    });

    // once this row's calculations are done, recalculate the totals for the entire list
    calculate_totals();
}

/**
 * Calculates the totals for the final row in the interactive
 */
function calculate_totals() {
    const item_rows = document.querySelectorAll(".calculator .row:not(.total)"); // grab all of the rows that are not the totals row

    /**
     * Set the total cost for each shop back to 0 
     * This allows for increases and decreases in quantities to be reflected correctly
     */
    let amazon = 0;
    let peapod = 0;
    let freshdirect = 0;

    /**
     * Iterate through each row
     */
    item_rows.forEach(function(row) {
        // capture the quantity value
        let qty = row.querySelector("[name='qty']").value;

        //if the quantity on this row is blank, skip the row
        if (qty === "") {
            return false;
        }

        qty = parseInt(qty); //convert quantity to an integer

        //capture all of the shop containers in this row
        const shops = row.querySelectorAll(".peapod, .freshdirect, .amazon");

        //for each shop
        shops.forEach(function(shop) {
            const price = parseFloat(shop.dataset.price); //get this shop's price for this row's item as a float
            const total = price * qty; //calculate the total by multiplying price X quantity

            // use the classes to figure out what shop this is

            if (shop.classList.contains("amazon")) { //if it's amazon, increase amazon's total
                amazon = amazon + total;
            }

            if (shop.classList.contains("peapod")) { //if it's peapod, increase peapod's total
                peapod = peapod + total;
            }

            if (shop.classList.contains("freshdirect")) { //if it's freshdirect, increase freshdirect's total
                freshdirect = freshdirect + total;
            }
        });
    });

    //at this point, the new sums for each shop have been calculated
    const total_row = document.querySelector(".row.total"); //grab the total row node and store it in a variable
    let cheapest = false; // set the cheapest variable to "false" by default

    total_row.classList.add("active"); // make the total row visible since there are numbers to display

    total_row.querySelector('.amazon span').innerHTML = round_number(amazon); // set the total row's amazon container content to be the round number for amazon's total
    total_row.querySelector('.peapod span').innerHTML = round_number(peapod); // set the total row's peapod container content to be the round number for peapod's total
    total_row.querySelector('.freshdirect span').innerHTML = round_number(freshdirect); // set the total row's freshdirect container content to be the round number for freshdirect's total

    /**
     * Now let's use conditionals to determine which shop cost least
     */
    if (amazon < peapod && amazon < freshdirect) { // if amazon's cost is less than both peapod and freshdirect, amazon is cheapest
        cheapest = 'amazon';
    }

    if (peapod < amazon && peapod < freshdirect) { // if peapod's cost is less than both amazon and freshdirect, peapod is cheapest
        cheapest = 'peapod';
    }

    if (freshdirect < amazon && freshdirect < peapod) { // if freshdirect's cost is less than both peapod and amazon, freshdirect is cheapest
        cheapest = 'freshdirect';
    }

    const cheapest_item = total_row.querySelector(`.cheapest`); // capture the node that CURRENTLY has the cheapest class, if there is one

    if (cheapest_item) { // if cheapest_item is not empty (if there IS an item that currently has the .cheapest class)
        cheapest_item.classList.remove("cheapest"); //remove the cheapest class
    }

    if (cheapest !== false) { // if the cheapest variable has been populated by one of the conditions
        /**
         * add the cheapest class to the element in the totals row that has the class of the store that is cheapest
         **/
        total_row.querySelector(`.${cheapest}`).classList.add("cheapest");
    }
}

/**
 * Rounds the input value to two decimal places for currency
 * @param {Number} num 
 * @returns {String}
 */
function round_number(num) {
    //first, move the decimal two places forward
    // 1.204567 becomes 120.4567
    num = num * 100;

    //then, round the number to the nearest integer
    // 120.4567 becomes 120
    num = Math.round(num);

    //then move the decimal back two places
    // 120 become 1.2
    num = num / 100;

    // handle trailing zeroes
    // 1.2 becomes 1.20
    num = num.toFixed(2);

    return num;
}