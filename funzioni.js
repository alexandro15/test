function calcoloarea(){
  var r = document.forms.circonferenza.r.value;
  var cerchio = r * r * Math.PI;
  document.getElementById("area").innerHTML = "area" + cerchio;
}

function calcolocirconferenza(){
        var r = document.forms.circonferenza.r.value;
	var circ= r * 2 * Math.PI;
	document.getElementById("misuracirconferenza").innerHTML = "circonferenza =" + circ; 
}

function cancella(){
        document.getElementById("area").innerHTML = "";
	document.getElementById("misuracirconferenza").innerHTML = "";
}
