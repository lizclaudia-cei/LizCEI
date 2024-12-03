//CRear una lista con los nombres de sus companeros y mostrarlos en consola con un bucle for
// Crear un bucle while que le pida al usuario un numeor y lo valla sumando hasta que el usuario ingrese el valor cero. Mostrar ek total
const alumnos = ["Candela","Jaime","Jaume","Alejo","Alin","Begoña","Daniel","Kristiyan","Laura","Lucia","Maria","Maricari","Lujan","Liz"];
for(i=0; i<alumnos.length; i++){
    console.log(alumnos[i]);
}

console.log("Impresion utilizando el forEach")
alumnos.forEach((alumno, indice)=>{
    console.log(`${indice+1}.  ${alumno}  `);
})


const btnClick = document.getElementById("btnClick");

let total = 0;

btnClick.addEventListener("click",()=>{
      let number = prompt("Ingresa un numero");
      number = Number(number);
    
        while(number !== 0){
            if( !isNaN(number)){
            total  += number;
            console.log(`EL nuevo total es ${total}`);
        }else{
            prompt("Debes de ingresar un numero ");
          }

          number =Number(prompt("Ingresa un numero"));
       }

      alert(`El total acumulado es: ${total}`);
    
});
