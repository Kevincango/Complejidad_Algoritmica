/**
 * Complejidad Temporal -> O(n**2)
 * Complejidad Espacial -> O(n)
 * Espacio Auxiliar -> O(1)
 */

function bubbleSort(array){ //O(n)
    let swapped;
    for(let i = 0; i < array.length; i++){ //O(1)
        swapped = false; //O(1)
        for(let j = 0; j < array.length -i -1; j++){ //O(1)
            if(array[j] > array[j + 1]){
                let temporal = array[j]; //O(1)
                array[j] = array[j + 1]; 
                array[j + 1] = temporal; 
                swapped = true; 
            }
        }
        if(!swapped){
            break;
        }
    }
    return array;
}
  