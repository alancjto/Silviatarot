
// Exijo al usuario a enviar "XALAN" sino vuelvo a pedirle un dato 


let usuario = prompt("Porfavor ingrese su nombre de usuario"); 

while (usuario != "XALAN"){
    console.log("EL USUARIO INGRESO " + usuario); 
    usuario = prompt("!Usuario Incorrecto !");
}

if(usuario == "XALAN"){
    console.log("XALAN INGRESO");
    alert("Bienvenido de nuevos XALAN");
}


// Decalro funcion para el promedio de 5 notas //

function promedioNotas(nota1, nota2 , nota3, nota4, nota5){
    let resultadoSuma = nota1 + nota2 + nota3 + nota4 + nota5;
    let promedio = resultadoSuma / 5;
    return promedio;

}


let nota1 = parseInt(prompt("ingrese la primer nota"));
let nota2 = parseInt(prompt("ingrese la segunda nota"));
let nota3 = parseInt(prompt("ingrese la tercera nota"));
let nota4 = parseInt(prompt("ingrese la cuarta nota"));
let nota5 = parseInt(prompt("ingrese la quinta nota"));

let respuesta = promedioNotas(nota1 , nota2 , nota3 , nota4 , nota5);
alert("TU PROMEDIO ES " + respuesta);

// meto las notas en un array // 

const arrayNotas = [];
arrayNotas.unshift(nota1, nota2, nota3, nota4 ,nota5);
console.log(arrayNotas);




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

const Fechanazi = document.getElementById('fechanaci')


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

    const accion7 = () => {
        formValues['Fechanazi'] = document.getElementById('fechanaci').value;
        localStorage.setItem('formValues' , JSON.stringify(formValues));
        console.log(formValues);
        console.log('Ingresando Fecha De Nacimiento');
    }


 // agrego liberia para dar notificado al usuario que sus datos se cargaron correctamente //   
    const accion6 = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu solicitud ah sido enviada',
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

Fechanazi.addEventListener('change' , accion7)


// solicito catalogo a mercado libre api //

const pedirPost = async () => {
    const posts = document.getElementById("catalogoCartastarot");
    
    fetch(`https://api.mercadolibre.com/sites/MLA/categories`)
    
    .then( (response) => response.json())
    .then( (data) => {
        data.forEach( (post) => {
            const li = document.createElement(`li`);
            li.innerHTML = `
            <h2>${post.id}</h2>
            <p>${post.name}</p>
            `;
            console.log(data);
        });
    });
    }
    pedirPost();

























