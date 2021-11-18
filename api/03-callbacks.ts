//Definición de la función GetUsuarioById
const getUsuarioByID = (id: number,timeout: number, callback: Function)=> {

  const user: any = {
    id: 11452,
    nombre: 'José de Jesus',
    apellidos: 'Alzati Zarate',
    numEmpleado: 10899,
    area: 'TI',
    puesto: 'dev'
  };

   setTimeout(() => {
    //Simulación de llamada a la base de datos
    callback(user);
  },timeout);


};

  //Definición de la función GetSalarioByIdUsuario
  const getSalarioByIdEmpleado=(idEmpleado: number, timeout: number,callback: Function)=>{
    const salario : any={
      idEmpleado: 10899,
      bruto: 12345.00,
      neto: 10123.00
    };

    setTimeout(() =>{
      callback(salario)
    },timeout);

  }

  //Definición de la funcion getAguinaldofromSalario

  const getAguinaldofromSalario =(salario: number, timeout:number, callback: Function) => {
    const aguinaldo: any={
      salario: 10123.00,
      conceptoA: 500,
      conceptoB: 600,
      conceptoC: 1500.00

    };

    setTimeout(() =>{
      callback(aguinaldo);
    },timeout);


  }



getUsuarioByID(11452, 3000, (usuario:any)=>{
  const {numEmpleado, nombre, apellidos} = usuario;
  console.log(numEmpleado, nombre,apellidos);

  getSalarioByIdEmpleado(10899,5000,(salario: any)=>{
    const { idEmpleado, neto } = salario;
    console.log(idEmpleado, neto);

    getAguinaldofromSalario(neto, 10000, (aguinaldo:any) => {
      const {salario, conceptoA, conceptoB, conceptoC} = aguinaldo; 
      console.log(salario,conceptoA,conceptoB,conceptoC)
    });
  });
});


console.log('Se esta ejecutando la llamada a BD');