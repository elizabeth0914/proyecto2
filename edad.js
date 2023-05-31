
function mascota(edad_humana){
    var calcular = 16 * Math.log ( edad_humana ) + 31;	
  
  var mensaje_resul = "Su mascota tiene " + calcular + " años en edad humana";
  
  return mensaje_resul;
  
  }
  
  var edad_humana = prompt("Introduzca la edad de tu mascota: ", "");
  
  var resultado = mascota(edad_humana);
  
  alert(resultado);