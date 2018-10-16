
/*
$(document).ready(function(){

$(".hide").click(function(){

	$("p").hide(900);
})


$(".show").click(function(){


	$("p").show(900);

})


})

*/

$(document).ready(function(){

/* fedein thos image  part  */

	$("#button").click(function(){


		$(".demo1").fadeIn(2000);
	})

	$("#button").click(function(){


		$(".demo2").fadeIn(3000);
	})


	$("#button").click(function(){


		$(".demo3").fadeIn(4000);
	})

/* showing image again part */



$(".hide").click(function(){

	$(".demo1").hide(900);
})


$(".hide").click(function(){

	$(".demo2").hide(900);
})

$(".hide").click(function(){

	$(".demo3").hide(900);
})




})