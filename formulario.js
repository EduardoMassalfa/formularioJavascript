var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;
var correo = formulario.correo;
var sexo = formulario.sexo;
var terminos = formulario.terminos;
var error = document.getElementById('error');

function validarNombre(e){
   if (nombre.value == '' || nombre.value == null) {
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre</li>';
      
      e.preventDefault(); //para no enviar el formulario si hay error

   }
   
   else{
   	  error.style.display = 'none';
   }
}

function validarCorreo(e){
   if (correo.value == '' || correo.value == null) {
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + '<li>Por favor completa el correo</li>';
      
      e.preventDefault(); //para no enviar el formulario si hay error

   } else{
   	  error.style.display = 'none';
   }
}

function validarSexo(e) {
	if (sexo.value == '' || sexo.value == null) {
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + '<li>Por favor completa el sexo</li>';
      
      e.preventDefault(); //para no enviar el formulario si hay error

    } else{
    	error.style.display = 'none';
    }
}  

function validarTerminos(e) {
	if (terminos.checked == false) {
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + '<li>Por favor acepta los términos</li>';
      
      e.preventDefault(); //para no enviar el formulario si hay error

    } else{
    	error.style.display = 'none';
    }
}

function validarFormulario(e) {
	error.innerHTML = ''; //para limpiar el error cada vez.
	validarNombre(e);
	validarCorreo(e);
	validarSexo(e);
  validarTerminos(e);
  
}

formulario.addEventListener('submit', validarFormulario);
