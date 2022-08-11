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



// clase domm // 

const productos = [
    {
        nombre: "vodka",
        precio: 2500,
    },
{
        nombre: "mesa" ,
        precio: 23800,
    },
];

const productoHTNL = (producto) => {
    let texto = "<div>";
    texto += "<h1>" + producto.nombre + "</h1>";
    texto += "<p>" + producto.precio + "</p>";
    texto += "</div>";

    return texto;
};

let catalogoHTML= "";

for(let i = 0; i < productos.length; i++) {
    catalogoHTML += productoHTNL(productos[i]);
}