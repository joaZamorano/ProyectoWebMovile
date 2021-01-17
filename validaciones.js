$(function() {

    $.validator.setDefaults({
        highlight: function(element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },
        unhighlight: function(element){ 
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        }
    }) 

    $.validator.addMethod('StrongPass', function(value, element){
        return this.optional(element) 
        || value.lenght >=6
        && /\d/.test(value)
        && /[a-z]/i.test(value);
    })

    $.validator.addMethod('RutLargo', function(value, element){
        return this.optional(element)
        || value.lenght >=9
    }, 'Ingrese un rut válido')

   $("#register-box").validate({
       rules: {
           nombre: {
               required: true,
               nowhitespace: true
           },
           apellido: "required",
           rut: {
               required: true,
               rut: true,
               RutLargo: true
           },
           correo: {
               required: true,
               correo: true
           },
           password: {
               required: true,
               StrongPass: true
            },
           pass2: {
               required: true,
               equalTo: "#pass"
           },
           tel: "required",
           fechaN: "required"
       },
       messages: {
           nombre: {
               required: 'Debe ingresar un nombre.',
               nowhitespace: 'No debe haber espacios en blanco'
           },
           apellido: {
                required: 'Debe ingresar su apellido'
           },

           rut: {
               required: 'Debe ingresar su rut',
               rut: 'Debe ingresar un rut válido'
           },

           correo: {
                required: 'Debe ingresar un correo',
                correo: 'Debe ingresar un correo válido'
           },
            password: {
                required: 'Debe ingresar una contraseña',
                StrongPass: 'Tu contraseña debe ser de al menos 6 carácteres, contener un número y un caracter'
            },
            pass2: {
                required: 'Debe ingresar una contraseña',
                equalTo: 'Ingrese el mismo valor'
            },
            tel: {
                required: 'Debe ingresar un número de teléfono'
            },
            fechaN: {
                required: 'Debe ingresar su fecha de nacimiento'
            }


       }
   }); 
});