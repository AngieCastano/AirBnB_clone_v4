#!/usr/bin/node
const filter_Box = document.querySelector('input');
filter_Box.addEventListener('change', function(data-name){
    if(filter.checked){
	$(".amenities h4").append("<li>{{ data-name  }}</li>");
    }
})
