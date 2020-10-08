function CheckedList(){
	HtmlInput = document.getElementsByTagName("INPUT");
    	$(".amenities h3").empty();
	for(var item of HtmlInput){
		let item1 = $("<li></li>").text(item.dataset.name);
		if(item.checked){
			$(".amenities h3").append(item1)
		}
	}
	
}