function LowerCaseF(a){
    setTimeout(function(){
        a.value = a.value.toLowerCase();
    }, 1);
}

function deCoder(){
    var texto = document.getElementById("floatingTextarea1").value;
    var mapObj = {
        e:"enter",
        i:"imes",
        a:"ai",
        o:"ober",
        u:"ufat"
    };
    resultado = texto.replace(/e|i|a|o|u/gi, function(matched){
        return mapObj[matched];
    });
               
    document.getElementById("evento").innerHTML = resultado;    
}

function desCoder(){
    var texto = document.getElementById("floatingTextarea1").value;
    var mapObj = {
        enter:"e",
        imes:"i",
        ai:"a",
        ober:"o",
        ufat:"u"
    };
    resultado = texto.replace(/enter|imes|ai|ober|ufat/gi, function(matched){
        return mapObj[matched];
    });
               
    document.getElementById("evento").innerHTML = resultado;    
}        


