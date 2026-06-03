const prompt =require("prompt-sync")();


let notas=prompt("escriba la nota");

if (notas>=5) {
    console.log("excelente precioso");
}

else if (notas>=3){
    console.log("aprobo raspado");
}
else {
    console.log("ya no hay nada que hacer ")
}