// const employees: any []=[
//     {
//         numEmpleado: 100,
//         nombre: 'Jesus',
//         apellidos: 'Alzati Zarate'
//     },
//     {
//         numEmpleado: 101,
//         nombre: 'Francisco',
//         apellidos: 'Lopez'
//     },
//     {
//         numEmpleado: 102,
//         nombre: 'Roberto',
//         apellidos: 'Mares'

//     }
// ];

// const salarios: any []=[
//     {
//         numEmpleado: 100,
//         salario: 24500,
//     },
//     {
//         numEmpleado: 102,
//         salario: 42500,
//     }
// ];

// const percepcionesAdicionales: any []=[
//     {
//         salario: 24500,
//         gratificacion: 500,
//         horasExtra: 1000,
//         bono: 150
//     },
//     {
//         salario: 42500,
//         gratificacion: 500,
//         horasExtra: 1000,
//         bono: 150
//     }
// ]

// //Definición de la función getUSuarioByEmpleadoNumber

// const getUsuarioByEmpleadoNumber = (numEmpleado: number, timeout: number)=>{
//     return new Promise((resolve: any, reject: any) => {
//         const employee: any = employees.find((empleado: any) => empleado.numEmpleado == numEmpleado);
        
//         if(employee){
//             resolve({
//                 status: 'OK', 
//                 data: employee
//             }); 
//         }else{
//             reject({
//                 status: 'UPS!',
//                 data: 'Empleado no encontrado, favor de verificar'
//             })
//         }
//     });

// };



// const getSalarioByEmpleadoNumber = (numEmpleado: number, timeout: number)=>{
//     return new Promise((resolve: any, reject: any) => {
//         const employee: any = salarios.find((salario: any) => salario.numEmpleado == numEmpleado);
        
//         if(employee){
//             resolve({
//                 status: 'OK', 
//                 data: employee
//             }); 
//         }else{
//             reject({
//                 status: 'UPS!',
//                 data: 'Salario no encontrado, favor de verificar'
//             })
//         }
//     });

// };

// const getPercepcionesAdicionalesBySalario = (salario: number, timeout: number) =>{
//     return new Promise ((resolve:any, reject: any) =>{
//         const percepciones: any = percepcionesAdicionales.find((item:any) => item.salario == salario)
//         if (percepciones){
//             resolve({status: 'ok', data: percepciones});
//         }else{
//             reject({status: 'not found', data:'lo sentimos no se encontraron percepciones adicionales para el salario ${salario}' });
//         }
//     });
// }


// /*Se ignora getSalarioByEmpleadoNumber como argumento de Usuario
// getUsuarioByEmpleadoNumber(102,3000)
// .then((result: any) => console.log(result))
// .catch((error: any) => console.log(error))*/

import RH from './utils/promises';

const rh: any = RH();



//Encadenamiento de promesas
RH().getUsuarioByEmpleadoNumber(102,3000)
    .then((result: any) => {
        console.log(result);
        return RH().getUsuarioByEmpleadoNumber(result.data.numEmpleado, 3000)
        
    })
    .then((result: any) => {
        console.log(result);
        return RH().getSalarioByEmpleadoNumber(result.data.numEmpleado, 3000)
        
    })
    .then((salario: any) =>{
        console.log(salario)
        return RH().getPercepcionesAdicionalesBySalario(salario.data.salario, 3000);

    })
    .then((result:any ) =>{
        console.log(`las percepciones adicionales para el s    alario ${result.data.salario} son:`, result.data.gratificacion, result.data.horasExtra, result.data.bono);
        

    })   
    .catch((error: any) => console.log(error))

 
RH().getSalarioByEmpleadoNumber(102,3000)
.then((result: any) => console.log(result))
.catch((error: any) => console.log(error))