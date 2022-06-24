
function esVocal(letra){
  
  if(letra.length > 1){
    return "Dato incorrecto";
  }
  if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return "Es vocal";
  }
  return "Dato incorrecto";
}