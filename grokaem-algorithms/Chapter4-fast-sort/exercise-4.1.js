const arr = [1, 4, 7, 6, 8, 2, 4];


/**
 * Функция высчитывает сумму всех элементов в переданном массиве через цикл.
 * @param arr {array} - массив элементов, которые нужно суммировать.
 * @returns {number} - сумма элементов переданного массива.
 */
function sumArrLoop(arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}


/**
 * Функция высчитывает сумму всех элементов в переданном массиве через рекурсию.
 * @param arr {array} - массив элементов, которые нужно суммировать.
 * @returns {number} - сумма элементов переданного массива.
 */
function sumArrRecursion(arr) {
	if(arr.length !== 0){
		return arr[0] + sumArrRecursion(arr.splice(1));
	} else {
		return 0;
	}
}

console.log(sumArrRecursion(arr));