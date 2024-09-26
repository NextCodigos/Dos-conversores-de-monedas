function convertir(cantidad,cambio){	
	let resultado=(cantidad*cambio);
	return resultado;
}
function convertir2(cantidad2,cambio2){	
	let resultado2=(cantidad2*cambio2);
	return resultado2;
}

var cambio_yen=125;
var cambio_yen2=125;
window.onload=inicio;

function inicio(){
	document.getElementById("input_cambio").value=cambio_yen;
	document.getElementById("boton").onclick=ir_a_convertir;
	document.getElementById("dinero").onkeydown=teclado;

	document.getElementById("input_cambio2").value=cambio_yen2;
	document.getElementById("boton2").onclick=ir_b_convertir2;
	document.getElementById("dinero2").onkeydown=teclado2;
}

function teclado(a){
	let codigo_tecla=a.keyCode;
	if (codigo_tecla==13){
		ir_a_convertir();
	}
}
function teclado2(b){
	let codigo_tecla=b.keyCode;
	if (codigo_tecla==13){
		ir_b_convertir2();
	}
}

function ir_a_convertir(){
	cambio=document.getElementById("input_cambio").value;
	cantidad=document.getElementById("dinero").value;
	cantidad= (cantidad!="") ? cantidad : 1;
	a=convertir(cantidad,cambio);
	document.getElementById("conversiones").innerHTML+=cantidad +" euros son " +a + " yenes<br>";
	document.getElementById("dinero").value="";
	document.getElementById("dinero").focus();
}
function ir_b_convertir2(){
	cambio2=document.getElementById("input_cambio2").value;
	cantidad2=document.getElementById("dinero2").value;
	cantidad2= (cantidad2!="") ? cantidad2 : 1;
	b=convertir(cantidad2,cambio2);
	document.getElementById("conversiones2").innerHTML+=cantidad2 +" euros son " +b + " yenes<br>";
	document.getElementById("dinero2").value="";
	document.getElementById("dinero2").focus();
}

