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
        || value.lenght >=8
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
               rut: 'Debe ingresar un rut válido',
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

   $("#reserve-box").validate({
        rules: {
            Nombre: {
                required: true,
                nowhitespace: true
            },
            Apellido: "required",
            Rut: {
                required: true,
                Rut: true,
                RutLargo: true
            },
            Correo: {
                required: true,
                correo: true
            },
            Tel: "required",
            FechaLL: "required",
            FechaR: "required"
        },
        messages: {
            Nombre: {
                required: 'Debe ingresar su nombre',
                nowhitespace: 'No deben haber espacios en blanco'
            },
            Apellido: {
                required: 'Debe ingresar su apellido'
            },
            Rut: {
                required: 'Debe ingresar su rut',
                Rut: 'El dato Rut es obligatorio',
            },
            Correo: {
                required: 'Debe ingresar su correo',
                Correo: 'El dato Correo es obligatorio'
            },
            Tel: {
                required: 'Debe ingresar su teléfono'
            },
            FechaLL: {
                required: 'Debe ingresar su fecha de llegada'
            },
            FechaR: {
                required: 'Debe ingresar su fecha de retiro'
            }
        }


   });

   $("#login-box").validate({
    rules: {
        user: {
            required: true,
            user: true
        },
        pass: {
            required: true,
            pass: true
        },

     messages: {
         user: {
             required: 'Este campo es obligatorio',
             user: 'Debe ingresar su usuario'
         },
         pass: {
             required: 'Este campo es obligatorio',
             pass: 'Debe ingresar su contraseña'
         }
     }
    }
});

});