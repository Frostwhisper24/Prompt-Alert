let dia = prompt("Escribir el nombre de un día de la semana:");

if(dia == "lunes"){
  alert("Es un día laboral.")
}
else if (dia == "martes"){
  alert("Es un día laboral.")
}
else if (dia == "miercoles"){
    alert("Es un día laboral.")
}
else if (dia == "jueves"){
    alert("Es un día laboral.")
}
else if (dia == "viernes"){
    alert("Es un día laboral.")
}
else if (dia == "sabado"){
    alert("Es un día de descanso.")
}
else if (dia == "domingo"){
    alert("Es un día de descanso.")
}
else{
    alert("Eso no es un día de la semana válido.")
}


let dia2 = prompt("Escriba el nombre de un día de la semana:");

switch(dia2){
  case "lunes":
    alert("Es un día laboral.")
    break;
  case "martes":
    alert("Es un día laboral.")
    break;
  case "miercoles":
    alert("Es un día laboral.")
    break;
  case "jueves":
    alert("Es un día laboral.")
    break;
  case "viernes":
    alert("Es un día laboral.")
    break;
  case "sabado":
    alert("Es un día de descanso.")
    break;
  case "domingo":
    alert("Es un día de descanso.")
    break;
  default:
    alert("No es un día de la semana válido.")
    break;
}