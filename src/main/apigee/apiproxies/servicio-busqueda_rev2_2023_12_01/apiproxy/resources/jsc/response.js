var response = context.getVariable("response.content");
var estado,descEstado,errores = null,respuesta = null;

var json = JSON.parse(response);

if(json[0] != null){
    if(json[0].codigo != null && json[0].descripcion != null){
        estado = "NOK";
        descEstado = "resultado con observaciones";
        errores = json;
    }else{
        estado = "OK";
        descEstado = "resultado exitoso";
        respuesta = json;
    }
}else{
    estado = "OK";
    descEstado = "resultado exitoso";
    respuesta = json;
}

var content = {
    "estado":{
        "codigo":estado,
        "descripcion":descEstado
    },
    "resultado":respuesta,
    "observaciones": errores,
    "error": null
};
var message = {
    "tipo": "success",
    "estado": context.getVariable("response.status.code"),
    "codigo": context.getVariable("response.reason.phrase"),
    "accion" : context.getVariable("request.verb"), 
	"aplicacion" : context.getVariable("app.id"), 
	"parametros" : context.getVariable("request.querystring"), 
	"ruta" : context.getVariable("proxy.pathsuffix"), 
	"uri" : context.getVariable("proxy.basepath"),
    "respuesta": content,
    "tiempo": context.getVariable("client.received.end.timestamp"),
	"organizacion" : context.getVariable("organization.name"),
	"ip": context.getVariable("proxy.client.ip"),
    "id": context.getVariable("messageid")
};
context.setVariable('response.content', JSON.stringify(message)); 