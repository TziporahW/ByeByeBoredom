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
        activitySelected: "",
        peopleAmount: 0,
        memberStatus: "",
        dateSelected: ""
    },
    computed:{

    },
    methods:{

        onChange: function(event){
            this.activitySelected = event.target.value;
            console.log(event.target.value);
         },
        isMember: function(){
            if(memberStatus === "member"){
                return true;
            }else{
                return false;
            }
        },
        cost: function(){
            //change to call this.isMember()
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
    document.getElementById("myDropdown").selectedIndex = 0;

    $("#book").click( function(){
        $("#dialog").dialog({
            modal:true,
            show: {
                effect: "blind",
                duration: 1000
            },
            buttons: {
                "Ok": function() {
                    // add functionality that adds the order to some array ordersConfirmed
                  $( this ).dialog( "close" );
                  $( ".controlgroup-vertical" ).controlgroup("refresh");
                },
                Cancel: function() {
                  $( this ).dialog( "close" );
                }
            }
        });
    });
})


