var app = new Vue({
    el: "#vueAttraction",
    data: {
        activities: [
            { id: 1, name: "Golf", price: 80 },
            { id: 2, name: "Basketball", price: 50 },
            { id: 3, name: "Min-Golf", price: 30 },
            { id: 4, name: "Tennis", price: 20 },
            { id: 5, name: "Fitness", price: 10 },
            { id: 6, name: "Yoga", price: 30 },
        ],
        activitySelected: 0,
        peopleAmount: 0,
    },
    compute:{
        cost(){
            if(isMember){
                var total = peopleAmount * activity.price;
                var discount = .2 * total;
                total = total - discount;
                return total;
            }
            else{
                var total = peopleAmount * activity.price
                return total;
            }
        }
    }
    
})

$(document).ready( function(){
    $( "#datepicker" ).datepicker();
    $( ".controlgroup-vertical" ).controlgroup({"direction":"vertical"});

    $("#book").click( function(){
        $("#dialog").dialog({
            modal:true,
            show: {
                effect: "blind",
                duration: 1000
            },
            buttons: {
                "Delete all items": function() {
                  $( this ).dialog( "close" );
                },
                Cancel: function() {
                  $( this ).dialog( "close" );
                }
            }
        });
    });
})


