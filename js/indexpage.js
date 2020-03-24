
init= function(){
    newsfeed();
}

newsfeed= function(){
    $('#mainbody').load("templates/newsfeed.html");
}

$( document ).ready(function() {   
    init();


    $("#home").on("click", function(){
        newsfeed();
    });

    $("#aboutus").on("click", function(){
        $('#mainbody').load("templates/aboutus.html");
    });

    $("#gallery").on("click", function(){
        $('#mainbody').load("templates/gallery.html");
    });
});

  