/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O( n )
 * Espacio Auxiliar -> Complejidad Espacial - Espacio de entrada =  O( n ) - O( 1 ) = O( 1 ) */

function linearSearch(array,key){ //O(n)
    for(let i = 0; i < array.length; i++){ //O(n) //CE: O(1)
        if(array[i] === key){ //O(1)
            return i; //O(1)
        }
    }
    return -1; //O(1)
}

