//Hello World en NODEJS

console.log("Aqui esta funcionando Babel");

let frutas: string[] = ['Fresa','Melon','Sandia'];
let edades: number[] = [23,45,26,50];
let matriz: boolean[] = [true, false, false,true];

let persona1: any ={
    nombre:'José de Jesús',
    apellidos:'Alzati Zárate',
    edad:32,
    fechaNacimiento: new Date(1989,10,18)
};

let persona2: any ={
    nombre:'Juan Roberto',
    apellidos:'Rivero Mares',
    edad:28,
    fechaNacimiento: new Date(1992,10-1,18)
};

//Array de personas

let personas : any[] = [];
personas.push(persona1);
personas.push(persona2);


console.log("El contenido del Array Personas es: ", personas);


const IVA: number = 1.16;

let ladoA: number = 5;
let ladoB: number = 5;
let area: number = ladoA + ladoB;

console.log("El area es: ", area);

let precio: number = 100;
let precioTotal: number = precio * IVA;

console.log("El precio total es: ", precioTotal);


//Define funcion de TS

const calculaArea=(ladoA: number, ladoB: number) => {
    return ladoA * ladoB;
}

console.log("El área calculada es: ", calculaArea(6,8));


