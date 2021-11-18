//Mocks Data

const employees: any []=[
    {
        numEmpleado: 100,
        nombre: 'José de Jesús',
        apellidos: 'Alzati Zarate'
    },
    {
        numEmpleado: 101,
        nombre: 'Francisco',
        apellidos: 'Lopez'
    },
    {
        numEmpleado: 102,
        nombre: 'Roberto',
        apellidos: 'Mares'

    }
];

const salarios: any []=[
    {
        numEmpleado: 100,
        salario: 24500,
    },
    {
        numEmpleado: 102,
        salario: 42500,
    }
];

const percepcionesAdicionales: any []=[
    {
        salario: 24500,
        gratificacion: 500,
        horasExtra: 1000,
        bono: 150
    },
    {
        salario: 42500,
        gratificacion: 500,
        horasExtra: 1000,
        bono: 150
    }
]


export default () => {
    return {    
        //Definicion de la funcion getUsuarioByEmpleadoNumber  
        getUsuarioByEmpleadoNumber: (numEmpleado: number, timeout: number)=>{
            return new Promise((resolve: any, reject: any) => {
                const employee: any = employees.find((empleado: any) => empleado.numEmpleado == numEmpleado);
                if(employee){
                    resolve({
                        status: 'OK', 
                        data: employee,
                        entidad:'Empleado',
                    }); 
                }else{
                    reject({
                        status: 'UPS!',
                        data: 'Empleado no encontrado, favor de verificar', 
                        entidad: 'Empleado'});
                }
            });
        },
        //Definición de la funcion getSalarioByEmpleadoNumber
        getSalarioByEmpleadoNumber: (numEmpleado: number, timeout: number)=>{
            return new Promise((resolve: any, reject: any) => {
                const employee: any = salarios.find((salario: any) => salario.numEmpleado == numEmpleado);
                
                if(employee){
                    resolve({
                        status: 'OK', 
                        data: employee,
                        endidad:'Salario'
                    }); 
                }else{
                    reject({
                        status: 'UPS!',
                        data: 'Salario no encontrado, favor de verificar',
                        entidad: 'Salario'
                    })
                }
            });
        },
        //Definición de la función getPercepcionesAdicionalesBySalario
        getPercepcionesAdicionalesBySalario: (salario: number, timeout: number) =>{
            return new Promise ((resolve:any, reject: any) =>{
                const percepciones: any = percepcionesAdicionales.find((item:any) => item.salario == salario)
                if (percepciones){
                    resolve({status: 'ok', data: percepciones, entidad:'Percepciones'});
                }else{
                    reject({status: 'not found', 
                    data:`lo sentimos no se encontraron percepciones adicionales para el salario ${salario}`,
                    entidad:'Percepciones'});
                }
            });
        }
    }
};

//Definición de la función getUSuarioByEmpleadoNumber
