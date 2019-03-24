const arr = [1, 4, 7, 6, 8, 2, 5, 9];


/**
 * Функция находит максимальное число в переданном массиве с помощью цикла.
 * @param arr {array} - массив в котором нужно найти максимальное число.
 * @return {number} - максимально число в переданном массиве.
 */
function maxArrLoop(arr) {
	let max = 0;

	for (let i = 0; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
	return max;
}

/**
 * Функция находит максимальное число в переданном массиве с помощью рекурсии.
 * @param arr {array} - массив в котором нужно найти максимальное число.
 * @return {number} - максимально число в переданном массиве.
 */
function maxArRecursion(arr) {

	if(arr.length === 1){
		return arr[0];
	} else if(arr.length === 2){
		return arr[0] > arr[1] ? arr[0] : arr[1];
	} else {
		const tmp_max = maxArRecursion(arr.splice(1));
		return arr[0] > tmp_max ? arr[0] : tmp_max;
	}
}

console.log(maxArRecursion(arr));