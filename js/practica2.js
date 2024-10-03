console.log("Hola mundo Javascript 2");
document.getElementById("titulo2").innerHTML = "Hola mundo Javascript 2";

//variables y tipos de datos
var edad;//Declarar Variable
edad = 20;//Asignar valor a la variable
var nombre = "Juan";
let nacionalidad = "Ecuatoriana";
const iva = 0.15;
//tipos de datos
//string
var apellido = "Chimbo";
console.log("Apellido:", apellido);
document.getElementById("titulo2").innerHTML = apellido;
//entero
var edad = 20;
document.getElementById("titulo2").innerHTML = edad;
//booleano
var bandera = true;
document.getElementById("titulo2").innerHTML = bandera;
//Objetos
var objeto = document.getElementById("titulo2");
//console.log(objeto);
objeto.innerHTML = "DATO 2"
//undefined
var dato = undefined;
objeto.innerHTML = dato;
//null
var dato = null;
objeto.innerHTML = dato;
//Operadores en Javascript
//aritmeticos
var a = 10;
var b = 15;
var suma = a + b;
var resta = a - b;
var multiplicacion = a * b;
var division = a / b;
objeto.innerHTML = suma;
objeto.innerHTML = resta;
objeto.innerHTML = multiplicacion;
objeto.innerHTML = "La división es:" + division;
//sentencias de control
//if
if (a > b) {
    objeto.innerHTML = "El valor de a es mayor que b";
} else {
    objeto.innerHTML = "El valor de b es mayor que a";
}
//
var nota = document.getElementById("entrada").value;
console.log(nota);
if (nota >= 7 && nota <= 10) {
    objeto.innerHTML = "Aprobado";
} else {
    objeto.innerHTML = "Desaprobado";
}

if (nota >= 7 && nota <= 8) {
    objeto.innerHTML = "Estudiante Regular";
} else if (nota > 8 && nota <= 9) {
    objeto.innerHTML = "Estudiante Bueno";
} else if (nota > 9 && nota <= 10) {
    objeto.innerHTML = "Estudiante Excelente";
} else {
    objeto.innerHTML = "Estudiante IRegular";
}
var entrada=document.getElementById("entrada");
console.log(entrada.value);
var dia = parseInt(entrada.value);
switch (dia) {
    case 1:
        objeto.innerHTML = "Lunes";
        break;
    case 2:
        objeto.innerHTML = "Martes";
        break;
    case 3:
        objeto.innerHTML = "Miercoles";
        break;
    case 4:
        objeto.innerHTML = "Jueves";
        break;
    case 5:
        objeto.innerHTML = "Viernes";
        break;
    case 6:
        objeto.innerHTML = "Sabado";
        break;
    case 7:
        objeto.innerHTML = "Domingo";
        break;
        default:
            objeto.innerHTML = "Dia no valido";
    
}

//bucles repetitivos
//for
for(var i=0;i<=10;i++){
    objeto.innerHTML=i
    console.log(i,"*",2,"=",i*2);
}
//while
var contador=0;
while(contador<=10){
    console.log(contador);
    objeto.innerHTML="Cumple la condición :"+contador;
    contador++;
    
}
//do while
var contador2=0;
do{
    objeto.innerHTML=contador2;
    console.log(contador2);
    contador2++;
}while(contador2<=10);


function sumar(){
    var num1=5;
    var num2=7;
    var suma=num1+num2;
    return suma;
}
objeto.innerHTML=sumar();


function sumar(a,b){
    var suma=a+b;
    return suma;
}
objeto.innerHTML=sumar(4,5);

function mostramensaje(){
    //alert("Hola mundo");
    objeto.innerHTML="Hola mundo";
    objeto.style.color="blue";
    alert(parseInt(entrada.value));

}
