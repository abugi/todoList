// $("li").click(function(){
// 	$(this).css("color", "gray");
// 	$(this).css("text-decoration", "line-through");
// });

// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// 	}else{
// 		$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});
// 	}
// });
$(document).ready(function(){
	liCount();
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("lisToggle");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
		liCountBack();
	});
	event.stopPropagation();
});

$("input[type=text]").keypress(function(event){
	var value = (event.which);
	var input = $(this).val();
	if(value === 13){
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + input + " </li>");
		$(this).val("");
		liCount();

	}

});

function liCount(){
	var lis = document.querySelectorAll("li");
	$("#count").text(lis.length);
}

function liCountBack(){
	var lis = document.querySelectorAll("li");
	$("#count").text(lis.length - 0);
	if(lis.length === 0){
		//$("input[type=text]").css("border", "2px solid red");
		$("#count").text("Empty");
	}
}

$("h1 span").click(function(){
		$("input[type=text]").toggleClass("inputToggle");
		$("#count").toggleClass("inputToggle");
});

