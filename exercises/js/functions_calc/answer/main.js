$(document).ready(function(){
    $(".item").find("input").on("keyup keydown keypress change", function(e){
        var input = $(this),
            item = input.closest(".item"),
            qty = parseFloat(item.find(".qty").val()),
            cost = parseFloat(item.find(".cost").val()),
            tariff = parseFloat(item.data("tariff-percent")),
            total = parseFloat(qty * cost),
            total_tariff = addTariff(total, tariff);

        if(isNumber(cost) && isNumber(qty)){
            item.find(".pre_total").find("span").text(total);
            item.find(".post_total").find("span").text(total_tariff);
        }
    });

    $(".calculate").on("click", function(e){
        e.preventDefault();

        var pre_cost = 0,
            post_cost = 0;

        $("td.pre_total").each(function(){
            var pre_total = $(this),
                total = pre_total.find("span").text();

                console.log("Totalling pre...");

            total = parseFloat(total);

            pre_cost += total;
        });

        $("td.post_total").each(function(){
            var post_total = $(this),
                total = post_total.find("span").text();

                console.log("Totalling post...");
            total = parseFloat(total);

            post_cost += total;
        });

        $("#pre_total").find("span").text(pre_cost);
        $("#post_total").find("span").text(post_cost);
    });
});


function isNumber(num){
    return !isNaN(parseFloat(num));
}

function addTariff(total, tariff){
    return total + (total * (tariff / 100));
}
