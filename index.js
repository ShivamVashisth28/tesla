// $(".nav").css("background-color","red");


// -----
$(".Vehicles").on("mouseenter",function(){
    $(".v-drop").css("display","flex");
    $(".c-drop").css("display","none");
    $(".s-drop").css("display","none");
    $(".d-drop").css("display","none");
    $(".e-drop").css("display","none");
    $(".car-details").css("display","none");


});

$(".v-drop").on("mouseleave",function(){
        $(".v-drop").css("display","none");
        $(".car-details").css("display","flex");
});

// -----
$(".Energy").on("mouseenter",function(){
    $(".e-drop").css("display","flex");
    $(".c-drop").css("display","none");
    $(".s-drop").css("display","none");
    $(".d-drop").css("display","none");
    $(".v-drop").css("display","none");
    $(".car-details").css("display","none");

});

$(".e-drop").on("mouseleave",function(){
    $(".e-drop").css("display","none");
    $(".car-details").css("display","flex");
});


// -----
$(".Discover").on("mouseenter",function(){
    $(".d-drop").css("display","flex");
    $(".c-drop").css("display","none");
    $(".s-drop").css("display","none");
    $(".e-drop").css("display","none");
    $(".v-drop").css("display","none");
    $(".car-details").css("display","none");

});

$(".d-drop").on("mouseleave",function(){
    $(".d-drop").css("display","none");
    $(".car-details").css("display","flex");
});



// -----
$(".Shop").on("mouseenter",function(){
    $(".s-drop").css("display","flex");
    $(".c-drop").css("display","none");
    $(".d-drop").css("display","none");
    $(".e-drop").css("display","none");
    $(".v-drop").css("display","none");
    $(".car-details").css("display","none");

});

$(".s-drop").on("mouseleave",function(){
    $(".s-drop").css("display","none");
    $(".car-details").css("display","flex");
});


// -----
$(".Charging").on("mouseenter",function(){
    $(".c-drop").css("display","flex");
    $(".d-drop").css("display","none");
    $(".s-drop").css("display","none");
    $(".e-drop").css("display","none");
    $(".v-drop").css("display","none");
    $(".car-details").css("display","none");
});

$(".c-drop").on("mouseleave",function(){
    $(".c-drop").css("display","none");
    $(".car-details").css("display","flex");
});





