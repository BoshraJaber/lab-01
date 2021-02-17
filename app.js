'use strict' ;
$('#background').on('change', changeColor);

function changeColor() {
var color = $('#background').val();
$('p').css('color', color);
}