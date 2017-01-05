$(function(){
	var limit = getParameterByName("limit"); 
	
	$.get("/blocks?limit=" + limit, appendToList);
	
	$("form").on("submit", function(event){
		event.preventDefault();
		var form = $(this);
		var blockData = form.serialize();
		
		$.ajax({
			type : "POST",
			url : "/blocks",
			data : blockData
		}).done(function(blockName){
			appendToList([blockName]);
			form.trigger("reset");
		});
	});

	$(".block-list").on("click", "a[data-block]", function(event){
		if(!confirm("Are you sure?")){
			return false;
		}
		var target = $(event.currentTarget);
		$.ajax({
			type : "DELETE",
			url : "/blocks/" + target.data("block")
		}).done(function(){
			target.parents("li").remove();
		});
	});


	function appendToList(blocks){
		var list = [];
		for(var i in blocks){
			var block = blocks[i];
			var content = '<a href="#" data-block="'+block+'">[x]</a> <a href="/blocks/' + block + '">' + block + '</a>';
			list.push($("<li>", {html:content}));
		}
		$(".block-list").append(list);
	}
	
	function getParameterByName(name, url) {
		if (!url) {
		  url = window.location.href;
		}
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
});