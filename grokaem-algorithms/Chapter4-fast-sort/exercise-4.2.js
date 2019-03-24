const arr = [1, 4, 7, 6, 8, 2, 5, 1, 23];


/**
 * Функция рекурсивно считает количество элементов в переданном массиве.
 * @param arr {array} - переданный массив, в котором нужно подсчитать количество элементов.
 * @returns {number} - количество элементов в переданном массиве.
 */
function lengthArr(arr) {
	if(arr.length !== 0){
		return 1 + lengthArr(arr.splice(1));
	} else {
		return 0;
	}
}

console.log(lengthArr(arr));