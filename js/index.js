//javascript for index.html
$(document).ready(function(){

	write_page();
	
	$('#sort_button').on('click', function(){
		movies.sort(sort_me);
		write_page()
	});

	function write_page(){
		//iterate through the JSON array and write into the page the content
		for (let i = 0; i < movies.length; i++) {
			$('.image_placeholder:eq('+i+')').attr('src',movies[i].src);
			$('.description_placeholder:eq('+i+')').text(movies[i].description);
			$('.title_placeholder:eq('+i+')').text(movies[i].name);
			//manipulate the like buttons and add event listener
			$('.movie_link:eq('+i+')').attr('id',movies[i].name).on('click', increase_like_counter)
			$('.circle:eq('+i+')').text(movies[i].like_counter)
			//console.log('number: '+i+'title<br>'+movies[i].name+'description<br>'+movies[i].description+'src'+movies[i].src)
		}
	}
	function increase_like_counter(){
		for (var i = 0; i < movies.length; i++) {
			if ($(this).attr('id') == movies[i].name) {
				movies[i].like_counter++
				$('.circle:eq('+i+')').text(movies[i].like_counter)
			}
		}
	}

	function sort_me(a, b){
		var a_likes = a.like_counter;
		var b_likes = b.like_counter; 
		return ((a_likes > b_likes) ? -1 : ((a_likes < b_likes) ? 1 : 0));
	}
});