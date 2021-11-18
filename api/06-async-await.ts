import RH from './utils/promises';


//Definicion de funcion Async/Await
async function main1(){
    

};

main1();


//Definicion de function arrow Async/Await
const main2 = async ()=>{

}

//Definicion de funcion ananima

(async() =>{
    try{
    const emp: any = await RH().getUsuarioByEmpleadoNumber(100,3000);
    const sal: any = await RH().getSalarioByEmpleadoNumber(emp.data.numEmpleado, 3000);
    const per: any = await RH().getPercepcionesAdicionalesBySalario(sal.data.salario, 3000);

    console.log(emp);
    console.log(sal);
    console.log(per);

    }
    catch(error){
        console.log("Error:",error);

    }
    

})();
    
