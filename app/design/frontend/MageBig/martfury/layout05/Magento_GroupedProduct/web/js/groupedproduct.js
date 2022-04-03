require([
    'jquery',
    'jquery/ui'
],
function ($) {
$(".grouped-selector").change(function(){
    var id = $(this).attr('id');
    var quantity = $(this).attr('quantity');

    if ($('#'+id).is(':checked')) {
        $("input[name='super_group["+id+"]']").val(quantity);
        $("input[name='super_group["+id+"]']").prop('readonly', false);
        pricechange();

    }
    else
    {
        $("input[name='super_group["+id+"]']").val("0");
        $("input[name='super_group["+id+"]']").prop('readonly', true);
        pricechange();
    }

});

$(".grouped-selector").change(function(){
    var id = $(this).attr('id');
    var quantity = $(this).attr('quantity');

    if ($('#'+id).is(':checked')) {
        $("input[name='super_group["+id+"]']").val(quantity);
        $("input[name='super_group["+id+"]']").prop('readonly', false);
        pricechange();

    }
    else
    {
        $("input[name='super_group["+id+"]']").val("0");
        $("input[name='super_group["+id+"]']").prop('readonly', true);
        pricechange();
    }

});

$('input[type="number"]').change(function(){
    pricechange();

});

$(window).on('load', function() {
    pricechange();
});

    function pricechange()
    {
        var final_price = 0;
        $("tbody tr").each(function(index) {
            if(index < jQuery("tbody tr").length-1){
                var quantity = $(this).find('input[type="number"]').val();
                var unitPrice = $(this).find('input[type="hidden"]').val();

                var productTotal = quantity*unitPrice;
                final_price = final_price+productTotal;
            }

        });

        final_price = final_price.toFixed(2);
        var priceSymbolCollector = $(".price").text();
        //var priceSymbolCollector = $(".price").html();
        //var symbol = priceSymbolCollector.charAt(0);

        if(jQuery('img.img-fluid')[0].alt== 'BoatParts'){
            var symbol = priceSymbolCollector.substring(0,3);
            $("#price-box").html(symbol+final_price);
        }

        if(jQuery('img.img-fluid')[0].alt== 'Boat-Parts.se'){
            var symbol = priceSymbolCollector.slice(-3);
            $("#price-box").html(final_price+symbol);

        }

        if(jQuery('img.img-fluid')[0].alt== 'Boat-Parts.dk'){
            var symbol = priceSymbolCollector.slice(-3);
            $("#price-box").html(final_price+symbol);

        }

        if(jQuery('img.img-fluid')[0].alt== 'Boat-Parts.net'){
            var symbol = priceSymbolCollector.substring(0,1);
            $("#price-box").html(symbol+final_price);
        }
        
    }

});