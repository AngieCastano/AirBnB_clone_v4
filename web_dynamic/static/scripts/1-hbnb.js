#!/usr/bin/node
function PrependItemsToList(name)
{
    $(".amenities h4").prepend($("<li></li>").text(name));
}
