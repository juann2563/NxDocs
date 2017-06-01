// variable for show content in order
var content = 1;

// function get element id and verify if other elements have the active class
function removeClassActive(click_id,select){
	var id = click_id;
	if(id == 'initTraining'){
		$('#menu0').removeClass('active');

		$('#menu1').addClass('active');

	}
	else{
		//Obtiene el id del elemento que se hizo click
		var x = document.getElementById(click_id);
		//agrega la clase active al elemento, la cual pone un recuadro al elemento 
		// para mostrar que está activo
		x.classList.add("active");
		for(var i=1; i<=select; i++){
			
			if("menu"+i == id){
			}
			else {
				$('#menu'+i).removeClass('active');
			}
		}
	}
    		
}
// Function for show content agree to clicked menu
function selectContent(clicked_id){
	//get value necesary for show specific content
	var start = parseInt($('#' + clicked_id).attr('start'));
	var end = parseInt($('#' + clicked_id).attr('end'));
	var select = parseInt($('#' + clicked_id).attr('select'));

	// get current menu showed and reset var content
	var currentMenu = parseInt(clicked_id.match(/[0-9]+/)[0],10);
	content = currentMenu;
	switch (select){
		case 1:
			removeClassActive(clicked_id,17);	
			break;

		case 2:
			removeClassActive(clicked_id,19);
			break;

		case 3:
			removeClassActive(clicked_id,19);
		break;
	}
	// function remove class for
	
	$('#pageContent').children().hide();
	$('#initTraining').hide();

	switch (select){
		case 1:
			for(start; start<=end; start ++){
				$('#pageContent').append('<img class="img-responsive" src="imagenes/1_fundamentals/'+start+'.PNG"'+'>');		
			}
			break;

		case 2:
			for(start; start<=end; start ++){
				$('#pageContent').append('<img class="img-responsive" src="imagenes/2_concept_model/'+start+'.PNG"'+'>');		
			}
			break;
	}
	
	if(clicked_id == 'menu1'){
		$('#pageContent').append('<br>');
		$('#parts').show().appendTo('#pageContent');	
	}
	
}
// Download mechatronics parts
function downloadParts(){
	window.location.href = 'parts_mechatronics/archivos_mechatronics.zip';
}
//navigate through menu with buttons next and back
function showContentWithAuxBtn(clicked_id){

	if(clicked_id == 'next'){
		content = content + 1;

		if(parseInt($('#cuerpo').attr('var')) == 1){
			if(content>17){
				content = 17;
			}
		}
		if (parseInt($('#cuerpo').attr('var')) == 2) {
			if(content>19){
				content = 19;
			}	
		}	
	}
	else {
		content = content - 1;
		if(content == 0){
			content = 1;
		}
	}
	var showContent = 'menu' + content;
	selectContent(showContent);
	// add again button downloads parts
	if(showContent == 'menu1'){
		$('#parts').show().appendTo('#pageContent');
	}
}

