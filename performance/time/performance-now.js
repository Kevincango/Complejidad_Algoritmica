function count(n){
    for(let i = 0; i < n; i++){
          console.log(i);
    }
  
}
let inicioTiempo = performance.now();
count(5);
let finalTiempo = performance.now();
let duracion = finalTiempo - inicioTiempo;
console.log(duracion);