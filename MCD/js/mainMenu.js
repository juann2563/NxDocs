function menu(clicked_id){
	switch(clicked_id){
		case '1':
			window.open('mcd1.html','_blank','height='+screen.height+', width='+screen.width);
		break;

		case '2':
			window.open('mcd2.html','_blank','height='+screen.height+', width='+screen.width);
		break;

		case '3':
			window.open('mcd3.html','_blank','height='+screen.height+', width='+screen.width);
		break;

		case '4':
			window.open('mcd4.html','_blank','height='+screen.height+', width='+screen.width);
		break;
	}

}
function downloadParts(){
	window.location.href = 'parts_mechatronics/parts_mechatronics.zip';
}