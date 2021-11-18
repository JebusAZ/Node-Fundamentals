const asyncDemo = () =>{


   
    setTimeout(() => {
        //EMular llamada a una BD
        console.log('BD Lista');
    }, 10000);

setTimeout(function(){
    console.log('API conectada');
},3000);

console.log('Hola mundo');
}
asyncDemo();
