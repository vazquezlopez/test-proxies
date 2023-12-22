var descriptionID = context.getVariable("descriptionID");
    
var messageDescriptionID = "";
// set default (0)
if(descriptionID === null){
    messageDescriptionID = "";
}else{
    var resDescriptionID = descriptionID.split(",");
    for (var i=0; i < resDescriptionID.length; i++) {
        if(i>0){
            messageDescriptionID += "</descriptionID><descriptionID>";
        }
        messageDescriptionID += resDescriptionID[i];
   	}
}
context.setVariable("messageDescriptionID", messageDescriptionID);