var nombreCategoria = context.getVariable("nombreCategoria"),
    nombreRefSet = context.getVariable("nombreRefSet");
    
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
var messageNombreRefSet = "";
// set default (0)
if(nombreRefSet === null){
    messageNombreRefSet = "";
}else{
    var resNombreRefSet = nombreRefSet.split(",");
    for (var i=0; i < resNombreRefSet.length; i++) {
        if(i>0){
            messageNombreRefSet += "</nombreRefSet><nombreRefSet>";
        }
        messageNombreRefSet += resNombreRefSet[i];
   	}
}

context.setVariable("messageNombreCategoria", messageNombreCategoria);
context.setVariable("messageNombreRefSet", messageNombreRefSet);