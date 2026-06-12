$(document).ready(function(){
    //left_arrow
    $('.left_arrow').click(function(){
         $('.magazin dl:first').appendTo('.magazin');
    });
    
    //right_arrow
    $('.right_arrow').click(function(){
       $('.magazin dl:last').prependTo('.magazin');
    });
});