// creando eventos con imput y agregando datos del imput generados por los usuarios al local storage y viendolos en consola con json.// 

if (!localStorage.getItem('formValues')) {
    formValues = {};
    
} else {
    formValues = localStorage.getItem('formValues');
    
}


const Nombre = document.getElementById('validationCustom01')

const Apellido = document.getElementById('validationCustom02')

const Email = document.getElementById('validationCustomUsername')

const Ciudad = document.getElementById('validationCustom03')

const Telefono = document.getElementById('validationCustom05')

const Enviar = document.getElementById('Registrar')


const accion1 = () => {
    formValues['Nombre'] = document.getElementById('validationCustom01').value;
    localStorage.setItem('formValues' , JSON.stringify(formValues));
    console.log(formValues);
    console.log('Ingresando Nombre');
}

const accion2 = () => {
    formValues['Apellido'] = document.getElementById('validationCustom02').value;
    localStorage.setItem('formValues' , JSON.stringify(formValues));
    console.log(formValues);
    console.log('Ingresando apellido')
}

const accion3 = () => {
    formValues['Email'] = document.getElementById('validationCustomUsername').value;
    localStorage.setItem('formValues' , JSON.stringify(formValues));
    console.log(formValues);
    console.log('ingresando mail')
}

const accion4 = () => {
    formValues['Nombre'] = document.getElementById('validationCustom03').value;
    localStorage.setItem('formValues' , JSON.stringify(formValues));
    console.log(formValues);
    console.log('ingresando ciudad')
}

    const accion5 = () => {
        formValues['Nombre'] = document.getElementById('validationCustom05').value;
        localStorage.setItem('formValues' , JSON.stringify(formValues));
        console.log(formValues);
        console.log('ingresando telefono')

    }


 // agrego liberia para dar notificado al usuario que sus datos se cargaron correctamente //   
    const accion6 = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    



Nombre.addEventListener('change' , accion1)

Apellido.addEventListener('change' , accion2)

Email.addEventListener('change' , accion3)

Ciudad.addEventListener('change' , accion4)

Telefono.addEventListener('change' , accion5)

Enviar.addEventListener('click' , accion6)



























