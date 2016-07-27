

 function newpage() {
        window.location = newLocation;
 }

var singleAudio = ["audio1.mp3", "audio2.mp3", "audio3.mp3", "audio4.mp3"];
var $audio = $('audio');

var chordAudio = ["chord1.mp3", "chord2.mp3", "chord3.mp3", "chord4.mp3", "chord4.mp3"];
var $audioChord = $('audio');


function getRandomAudio() {
    var max = singleAudio.length;
    return Math.floor(Math.random() * (max + 1));
}

function getRandomChord() {
    var max = chordAudio.length;
    return Math.floor(Math.random() * (max + 1));
}

function playChord() {
  var index = getRandomChord();
  $audioChord.attr('src', chordAudio[index]);
  $audioChord.get(0).play();
}


function playAudio() {
  var index = getRandomAudio();
  $audio.attr('src', singleAudio[index]);
  $audio.get(0).play();
}

//expand contract thumbs
//has something to do with clearqueue(queuename)
//clearing queue of all .innerqueue is causing it to double flash

//function expand () {   
//    $(this).clearQueue();
//    $('.innerText').clearQueue();
//    $(this).animate({'wi dth': '36em'}, 900);
//    $(this).animate({'height': '10em'}, 500);
////    $(this).animate({'width': '36em'}, 500);
//    $('.innerText').delay(1000).animate({'opacity': '0.5'}, 500);
//}

function graphicdesignExpand () {   
    playAudio();
    $(this).clearQueue();
    $('.innerText-graphicdesign').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-graphicdesign').delay(1000).animate({'opacity': '0.5'}, 500);
}


function floatExpand () {   
    playAudio();
    $(this).clearQueue();
    $('.innerText-float').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-float').delay(1000).animate({'opacity': '0.5'}, 500);
}

function hiveExpand () {   
    playAudio();
    $(this).clearQueue();
    $('.innerText-hive').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-hive').delay(1000).animate({'opacity': '0.5'}, 500);
}

function noisyExpand () {   
    playAudio();
    $(this).clearQueue();
    $('.innerText-noisy').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-noisy').delay(1000).animate({'opacity': '0.5'}, 500);
}

function mapExpand () {   
    playAudio();
    $(this).clearQueue();
    $('.innerText-map').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-map').delay(1000).animate({'opacity': '0.5'}, 500);
}

function darkroomExpand () {   
    playAudio();
    $(this).clearQueue();
    $('.innerText-darkroom').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-darkroom').delay(1000).animate({'opacity': '0.5'}, 500);
}

function surfaceExpand () {  
    playAudio();
    $(this).clearQueue();
    $('.innerText-surface').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-surface').delay(1000).animate({'opacity': '0.5'}, 500);
}

function screwsExpand () {   
    playAudio();
    $(this).clearQueue();
    $('.innerText-screws').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-screws').delay(1000).animate({'opacity': '0.5'}, 500);
}

function otherExpand () {   
    playAudio();
    $(this).clearQueue();
    $('.innerText-').clearQueue();
    $(this).animate({'width': '36em'}, 500);
    $(this).animate({'height': '10em'}, 500);
//    $(this).animate({'width': '36em'}, 500);
    $('.innerText-').delay(1000).animate({'opacity': '0.5'}, 500);
}




function graphicdesignContract () {
    $(this).clearQueue();
    $('.innerText-graphicdesign').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '10em'}, 500);                           
}

function floatContract () {
    $(this).clearQueue();
    $('.innerText-float').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '11em'}, 500);                           
}

function hiveContract () {
    $(this).clearQueue();
    $('.innerText-hive').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '10em'}, 500);                           
}
function noisyContract () {
    $(this).clearQueue();
    $('.innerText-noisy').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '12em'}, 500);                           
}
function mapContract () {
    $(this).clearQueue();
    $('.innerText-map').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '9em'}, 500);                           
}
function darkroomContract () {
    $(this).clearQueue();
    $('.innerText-darkroom').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '13em'}, 500);                           
}
function surfaceContract () {
    $(this).clearQueue();
    $('.innerText-surface').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '14em'}, 500);                           
}
function screwsContract () {
    $(this).clearQueue();
    $('.innerText-screws').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '12em'}, 500);                           
}
function othergameContract () {
    $(this).clearQueue();
    $('.innerText-').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '9em'}, 500);                           
}
function othervideoContract () {
    $(this).clearQueue();
    $('.innerText-').clearQueue().animate({'opacity': '0.0'}, 300);
    $(this).delay( 500 ).animate({'height': '1em'}, 500);
    $(this).animate({'width': '10em'}, 500);                           
}

//category select

function allSelect (){
    console.log("triggered");
                $('#sound').css("background-color", "transparent");
        $('#design').css("background-color", "transparent");
        $('#interactive').css("background-color", "transparent");
        playChord();
      $('#tn-graphicdesign').clearQueue().animate({'width': '10em'}, 500);
        $('#tn-float').clearQueue().animate({'width': '11em'}, 500);
        $('#tn-hive').clearQueue().animate({'width': '10em'}, 500);
        $('#tn-noisy').clearQueue().animate({'width': '12em'}, 500);
        $('#tn-map').clearQueue().animate({'width': '9em'}, 500);
        $('#tn-darkroom').clearQueue().animate({'width': '13em'}, 500);
        $('#tn-surface').clearQueue().animate({'width': '14em'}, 500);
        $('#tn-screws').clearQueue().animate({'width': '12em'}, 500);
        $('#tn-othergame').clearQueue().animate({'width': '9em'}, 500);
        $('#tn-othervideo').clearQueue().animate({'width': '10em'}, 500);
}
function designSelect (){
    console.log("triggered");
        $(this).css("background-color", "#ddff02");
        $('#interactive').css("background-color", "transparent");
        $('#sound').css("background-color", "transparent");
        
            playChord();
    
        $('#tn-hive').clearQueue().animate({'width': '0em'}, 500);
        $('#tn-noisy').clearQueue().animate({'width': '0em'}, 500);
        $('#tn-screws').clearQueue().animate({'width': '0em'}, 500);
        $('#tn-othervideo').clearQueue().animate({'width': '0em'}, 500);
        $('#tn-float').clearQueue().animate({'width': '0em'}, 500);
    
         $('#tn-graphicdesign').clearQueue().animate({'width': '10em'}, 500);
        $('#tn-map').clearQueue().animate({'width': '9em'}, 500);
        $('#tn-surface').clearQueue().animate({'width': '14em'}, 500);
        $('#tn-darkroom').clearQueue().animate({'width': '13em'}, 500);
        $('#tn-othergame').clearQueue().animate({'width': '9em'}, 500);
    
}
function intSelect (){
    console.log("triggered");
        $(this).css("background-color", "#ddff02");
        $('#design').css("background-color", "transparent");
        $('#sound').css("background-color", "transparent");
            playChord();
        $('#tn-map').clearQueue().animate({'width': '0em'}, 500);
        $('#tn-surface').clearQueue().animate({'width': '0em'}, 500);
         $('#tn-screws').clearQueue().animate({'width': '0em'}, 500);
        $('#tn-othervideo').clearQueue().animate({'width': '0em'}, 500);
    $('#tn-graphicdesign').clearQueue().animate({'width': '0em'}, 500);
    
    
        $('#tn-hive').clearQueue().animate({'width': '10em'}, 500);
        $('#tn-noisy').clearQueue().animate({'width': '12em'}, 500);
        $('#tn-darkroom').clearQueue().animate({'width': '13em'}, 500);
        $('#tn-othergame').clearQueue().animate({'width': '9em'}, 500);
        $('#tn-float').clearQueue().animate({'width': '11em'}, 500);
}
function soundSelect (){
    console.log("triggered");
            $(this).css("background-color", "#ddff02");
        $('#design').css("background-color", "transparent");
        $('#interactive').css("background-color", "transparent");
            playChord();
        $('#tn-darkroom').clearQueue().animate({'width': '0em'}, 500);
        $('#tn-surface').clearQueue().animate({'width': '0em'}, 500);
        $('#tn-othergame').clearQueue().animate({'width': '0em'}, 500);
    $('#tn-graphicdesign').clearQueue().animate({'width': '0em'}, 500);
    
    
        $('#tn-hive').clearQueue().animate({'width': '10em'}, 500);
        $('#tn-noisy').clearQueue().animate({'width': '12em'}, 500);
        $('#tn-map').clearQueue().animate({'width': '9em'}, 500);
        $('#tn-screws').clearQueue().animate({'width': '12em'}, 500);
        $('#tn-othervideo').clearQueue().animate({'width': '10em'}, 500);
         $('#tn-float').clearQueue().animate({'width': '11em'}, 500);
}

//load page


$(document).ready(function(){
    
//    $('.hey').hover(playAudio);
    
    $('#allWork').click(allSelect);
    $('#design').click(designSelect);
    $('#interactive').click(intSelect);
    $('#sound').click(soundSelect);
    
    $('.upperText').css('display', 'none');
    $('.upperText').fadeIn(1000); 
    
        $('#tn-graphicdesign').hover(graphicdesignExpand, graphicdesignContract);
      $('#tn-float').hover(floatExpand, floatContract);
    $('#tn-hive').hover(hiveExpand, hiveContract);
    $('#tn-noisy').hover(noisyExpand, noisyContract);
    $('#tn-map').hover(mapExpand, mapContract);
    $('#tn-darkroom').hover(darkroomExpand, darkroomContract);
    $('#tn-surface').hover(surfaceExpand, surfaceContract);
     $('#tn-screws').hover(screwsExpand, screwsContract);
     $('#tn-othergame').hover(otherExpand, othergameContract);
     $('#tn-othervideo').hover(otherExpand, othervideoContract);
    
    
//        $('#tn-hive').hover(expand, hiveContract);
//    $('#tn-noisy').hover(expand, noisyContract);
//    $('#tn-map').hover(expand, mapContract);
//    $('#tn-darkroom').hover(expand, darkroomContract);
//    $('#tn-surface').hover(expand, surfaceContract);
//     $('#tn-screws').hover(expand, screwsContract);
//     $('#tn-othergame').hover(expand, othergameContract);
//     $('#tn-othervideo').hover(expand, othervideoContract);
//      $('#tn-float').hover(expand, floatContract);
    
    $('.link').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(1000, newpage);
    
    });


    function newpage() {

        window.location = newLocation;

    }
    
});
