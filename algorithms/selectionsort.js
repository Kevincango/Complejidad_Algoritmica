/**
 * Complejidad Temporal -> O( n**2 )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> O( 1 )
 */

function selectionSort(array){ //O(n)
    let len = array.length; //O(1)

    for(let i = 0; i < len; i++){ //O(1)
        let min = i; //O(1)
        for(let j = i + 1; j < len; j++){ //O(1)
            if(array[j] < array[min]){
                min = j;
            }
        }
        if(min != i){
            let temporal = array[i]; //O(1)
            array[i] = array[min];
            array[min] = temporal;
        }
    }
    return array;
}