const persona: any ={
    id: 11452,
    nombre: 'Jesus',
    apellidos: 'Alzati',
    ciudad: 'Irapuato',
    deportes: ['Fut', 'Beis','Basket'],
    organigrama:[
        {
            area: 'TI',
            puesto: 'DevOps'
        },
        {
            area: 'Networking',
            puesto: 'SRE'
        }
    ]
}

console.log(persona.id,persona.apellidos,persona.deportes,persona.organigrama);

//Desestructuración de un objeto
const {id,apellidos, deportes, organigrama} = persona;
console.log(id,apellidos);


const frutas2: string[] = ['Manzana','Pera', 'Naranja', 'Mandarina', 'Platano', 'Fresa'];

const [f1, f2, f3] = frutas2;
console.log(f3);
