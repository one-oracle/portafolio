function validarDatos() {
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    window.event.preventDefault()
    if (document.form.nombre.value == "" || document.form.nombre.value.length > 50) {
        alert("Campo Nombre es obligatorio y debe contener máximo 50 caracteres.")
        document.form.nombre.focus()
    } else if (document.form.email.value == "") {
        alert("Campo E-mail es obligatorio")
        document.form.email.focus()
    } 
    // else if (document.form.email.value.indexOf('@') == -1 ||
    //     document.form.email.value.indexOf('.') == -1) {
    //     alert("Campo E-mail inválido")
    // }
    else if(!validEmail.test(document.form.email.value)){
        alert("Campo E-mail inválido")
    }
    else if (document.form.asunto.value == "" || document.form.nombre.value.length > 50) {
        alert("Campo Asunto es obligatorio y debe contener máximo 50 caracteres.")
        document.form.asunto.focus()
    } else if (document.form.mensaje.value == "" || document.form.mensaje.value.length > 300) {
        alert("Campo Mensaje es obligatorio y debe contener máximo 300 caracteres.")
        document.form.mensaje.focus()
    }
    else{
        alert("Formulario validado")
        // form.submit()
        form.reset()
    }	
}
document.querySelector('form').addEventListener('submit', validarDatos)
