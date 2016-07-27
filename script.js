

function expand () {

    $(this).clearQueue();
    $('.innerText').clearQueue();
    $(this).animate({'width': '26em'}, 500);
    $(this).animate({'height': '10em'}, 500);
    $(this).animate({'width': '36em'}, 500);

    $('.innerText').animate({'opacity': '0.5'}, 500);

}

function contract () {
    $(this).clearQueue();


    $('.innerText').animate({'opacity': '0.0'}, 300);

    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '15em'}, 500);                           

}

 function newpage() {

        window.location = newLocation;

    }


$(document).ready(function(){

$(function() {
	$('#container img').each(function(i) {
	$(this).delay((i++) * 500).fadeTo(1000, 1); })
});
    
    $('.upperText').css('display', 'none');

    $('.upperText').fadeIn(1000); 
    
    $('.hive-tn').hover(expand, contract);

    $('.noisy-tn').hover(expand, contract);

    $('.map-tn').hover(expand, contract);
    
    $('.darkroom-tn').hover(expand, contract);

    $('.surface-tn').hover(expand, contract);
    
    $('.link').click(function(event) {

        event.preventDefault();

        newLocation = this.href;

        $('body').fadeOut(1000, newpage);
        
        console.log("prevent");
    });


    function newpage() {

        window.location = newLocation;

    }
    
});
