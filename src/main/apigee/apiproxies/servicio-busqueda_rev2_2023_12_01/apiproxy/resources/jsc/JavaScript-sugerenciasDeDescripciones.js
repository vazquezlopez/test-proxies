var nombreCategoria = context.getVariable("nombreCategoria");
    
var messageNombreCategoria = "";
// set default (0)
if(nombreCategoria === null){
    messageNombreCategoria = "";
}else{
    var resNombreCategoria = nombreCategoria.split(",");
    for (var i=0; i < resNombreCategoria.length; i++) {
        if(i>0){
            messageNombreCategoria += "</nombreCategoria><nombreCategoria>";
        }
        messageNombreCategoria += resNombreCategoria[i];
   	}
}
context.setVariable("messageNombreCategoria", messageNombreCategoria);