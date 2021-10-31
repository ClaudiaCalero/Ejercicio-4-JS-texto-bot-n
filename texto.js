//Teniendo un input de texto y un botón:
//Desarrollar una función que al hacer click en él, 
//escriba el contenido (value) del input como un título en el documento.


var getData = function () {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    console.log(name+" "+lastname);

    //Con esto conseguimos que al enviar documentos se limpie el formulario de los campos de texto
    // con las dobles comillas vacias los limpiamos  
    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("name").focus = "";
}

