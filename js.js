var rosaOriginal = "rgb(239, 71, 111)";

var w = window.innerWidth;
var h = window.innerHeight;

alert(w);
alert(h);

function colorearRosa(boton){
    boton.style.color = rosaOriginal;
  }
  
  function colorearBlanco(boton){
    boton.style.color = "White";
  }

  function colorearInverso(boton){
    boton.style.color = rosaOriginal;
    boton.style.backgroundColor = "White";
  }

  function colorearNormal(boton){

    boton.style.color = "White";
    boton.style.backgroundColor = rosaOriginal;
  }