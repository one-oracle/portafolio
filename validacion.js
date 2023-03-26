function validarDatos() {
    window.event.preventDefault()
    if (document.form.nombre.value == "") {
        alert("Campo Nombre es obligatorio")
        document.form.nombre.focus()
    } else if (document.form.email.value == "") {
        alert("Campo E-mail es obligatorio")
        document.form.email.focus()

    } else if (document.form.email.value.indexOf('@') == -1 ||
        document.form.email.value.indexOf('.') == -1) {
        alert("e-mail inválido")
    }
    else if (document.form.asunto.value == "") {
        alert("Campo Asunto es obligatorio")
        document.form.asunto.focus()
    } else if (document.form.mensaje.value == "" || document.form.mensaje.value.length <= 50) {
        alert("Campo Mensaje es obligatorio y debe contener mínimo 50 carateres")
        document.form.mensaje.focus()
    }
    else{
        alert("Formulario validado")
        // form.submit()
        form.reset()
    }	
}
document.querySelector('form').addEventListener('submit', validarDatos)
