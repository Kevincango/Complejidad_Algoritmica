function count(n){
    for(let i = 0; i < n; i++){
          console.log(i);
    }
  
}

function repetArray(array){
    let arrayRepeat = [...array];
    return arrayRepeat;
}

function arrayElementsToString(array){
    return array.map(item => item.toString());
}

console.log(arrayElementsToString([1,2,3]));

function matrizGeneration(n){
    let matriz = new Array(n);
    for(let i = 0; i < n; i++){
        matriz[i] = new Array(n).fill(1);
    }
    return matriz;
}

console.log(matrizGeneration(5));

function cloneMatrizConversor(matriz) {
    const result = [];
    for (let i = 0; i < matriz.length; i++) {
        let text = "";
        for (let j = 0; j < matriz[i].length; j++) {
            text += matriz[i][j] + "\t";
        }
        console.log(text);
        result.push(text);
    }
    return result;
}

const returnedArray = cloneMatrizConversor([[1,2,3],[4,5,6],[7,8,9]]);
console.log(returnedArray);

function cloneMatriz(matriz) {
    const newMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        const newRow = [];
        for (let j = 0; j < matriz[i].length; j++) {
            newRow.push(matriz[i][j]);
        }
        newMatriz.push(newRow);
    }
    return newMatriz;
}

const originalMatriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const clonedMatriz = cloneMatriz(originalMatriz);

console.log(clonedMatriz);

//DEEP COPY MATRIZ
const deepCopiedMatriz = originalMatriz.map(row => [...row]);
