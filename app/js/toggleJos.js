/*
=======================================================================================
Nombre: Toggle
Creado por: Joseph Hernández
Versión: 1.0(Beta)
=======================================================================================
*/
var divs = ["primero", "segundo", "tercero", "cuarto","uno","dos","tres","cuatro"];
var visibleDivId = null;
function mostrarOcultar(divId) {
  if(visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId,divId2, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
      div.parentNode.style.display = "block";
      /*Active de los primeros botones*/
      if(divId.localeCompare("primero")===0){
        document.getElementById("A").src="img/unoAct.png";
      }else if(divId.localeCompare("segundo")===0){
        document.getElementById("B").src="img/twoAct.png";
      }else if(divId.localeCompare("tercero")===0){
        document.getElementById("C").src="img/threeAct.png";
      }else if(divId.localeCompare("cuarto")===0){
        document.getElementById("D").src="img/fourAct.png";
      }
      /*Active de los primeros botones minimizados*/
      if(divId.localeCompare("primero")===0){
        document.getElementById("a").src="img/oneMinAct.png";
      }else if(divId.localeCompare("segundo")===0){
        document.getElementById("b").src="img/twoMinAct.png";
      }else if(divId.localeCompare("tercero")===0){
        document.getElementById("c").src="img/threeMinAct.png";
      }else if(divId.localeCompare("cuarto")===0){
        document.getElementById("d").src="img/fourMinAct.png";
      }
      /*#############################################################*/
      /*Active de los segundos botones*/
      if(divId.localeCompare("uno")===0){
        document.getElementById("w").src="img/chedrauiAct.png";
      }else if(divId.localeCompare("dos")===0){
        document.getElementById("x").src="img/interjetAct.png";
      }else if(divId.localeCompare("tres")===0){
        document.getElementById("y").src="img/elcorteinglesAct.png";
      }else if(divId.localeCompare("cuatro")===0){
        document.getElementById("z").src="img/grouponAct.png";
      }
      /*Active de los segundos botones minimizados*/
      if(divId.localeCompare("uno")===0){
        document.getElementById("W").src="img/chedrauiAct.png";
      }else if(divId.localeCompare("dos")===0){
        document.getElementById("X").src="img/interjetAct.png";
      }else if(divId.localeCompare("tres")===0){
        document.getElementById("Y").src="img/elcorteinglesAct.png";
      }else if(divId.localeCompare("cuatro")===0){
        document.getElementById("Z").src="img/grouponAct.png";
      }

    } else {
      div.style.display = "none";
      div.parentNode.style.display = "none";
      /*Estado inicial de los primeros botones*/
      if(divId.localeCompare("primero")===0){
        document.getElementById("A").src="img/one.png";
      }else if(divId.localeCompare("segundo")===0){
        document.getElementById("B").src="img/two.png";
      }else if(divId.localeCompare("tercero")===0){
        document.getElementById("C").src="img/three.png";
      }else if(divId.localeCompare("cuarto")===0){
        document.getElementById("D").src="img/four.png";
      }
      /*Active de los primeros botones minimizados*/
      if(divId.localeCompare("primero")===0){
        document.getElementById("a").src="img/oneMin.png";
      }else if(divId.localeCompare("segundo")===0){
        document.getElementById("b").src="img/twoMin.png";
      }else if(divId.localeCompare("tercero")===0){
        document.getElementById("c").src="img/threeMin.png";
      }else if(divId.localeCompare("cuarto")===0){
        document.getElementById("d").src="img/fourMin.png";
      }
      /*#############################################################*/
      /*Active de los segundos botones*/
      if(divId.localeCompare("uno")===0){
        document.getElementById("w").src="img/chedraui.png";
      }else if(divId.localeCompare("dos")===0){
        document.getElementById("x").src="img/interjet.png";
      }else if(divId.localeCompare("tres")===0){
        document.getElementById("y").src="img/elcorteingles.png";
      }else if(divId.localeCompare("cuatro")===0){
        document.getElementById("z").src="img/groupon.png";
      }
      /*Active de los segundos botones Minimizados*/
      if(divId.localeCompare("uno")===0){
        document.getElementById("W").src="img/chedraui.png";
      }else if(divId.localeCompare("dos")===0){
        document.getElementById("X").src="img/interjet.png";
      }else if(divId.localeCompare("tres")===0){
        document.getElementById("Y").src="img/elcorteingles.png";
      }else if(divId.localeCompare("cuatro")===0){
        document.getElementById("Z").src="img/groupon.png";
      }
    }
  }
}