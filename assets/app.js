function add(){

	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById("comment").value;

	//limpiar el textarea
	document.getElementById("comment").value = '';

	//contenedor que esta en el html
	var conts = document.getElementById("conts");

	//creamos el div que contiene cada comentario
	var newComment = document.createElement("div");

	//deshabilitar boton a campo vacio
	if(comments.length == 0 || comments == null){
		return document.getElementById("btn").disabled = true;
	} else{

	};
    //crear nodo de texto 
	var textNewComment = document.createTextNode(comments);
	var contenedorElemento = document.createElement("p");

	contenedorElemento.appendChild(textNewComment);
	newComment.appendChild(contenedorElemento);

	//crear hora
	var actual = new Date();
    var hh = actual.getHours();
    var mm = actual.getUTCMinutes();
 
    //creamos nodo de texto con hora actual
    var txtHora = document.createTextNode(hh + ':' + mm);

    //poner hora
    var hora = document.createElement("p");

    //agregar al elemento
    hora.appendChild(txtHora);
    newComment.appendChild(hora);

	conts.appendChild(newComment);

}
function textAreaAdjust(o){
	o.style.height = "1px";
  	o.style.height = (25+o.scrollHeight)+"px";
}
	/* CONTADOR */
var txtArea = document.getElementById('comment');
comment.onkeydown = function (){
	var comment = document.getElementById("comment");
	var show = comment.value.length;
	var cont = document.getElementById("caracter");
	cont.innerHTML = 140 - show;

	if(show >= 120 && show < 130){
		return cont.setAttribute('class', 'olive');
	}
	if(show >= 130 && show < 140){
		return cont.setAttribute('class', 'violet');
	} else{

	};
	if(show > 140){
		return document.getElementById("btn").disabled = true;
	} else{
		return document.getElementById("btn").enabled = true;
	}
};	
