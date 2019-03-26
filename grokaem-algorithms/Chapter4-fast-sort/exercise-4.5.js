const arr = [2, 5, 9, 5, 7, 1, 3, 51, 71, 34, 15, 564, 1561, 1554, 5, 584, 21, 78, 21];
//const arr = [2, 5, 2, 5, 2, 2, 2, 2, 5, 5, 5, 5, 2];
//const arr = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
//const arr = [2, 5, 9];
//const arr = [6, 5];

console.log(quickSort(arr));


/**
 * Функция быстрой сортировки массива через опорное число
 * @param arr {array} - массив который нужно отсортировать
 * @return {array} - отсортированный массив
 */
function quickSort(arr) {
	// Базовый случай, сортировать не надо
	if(arr.length < 2){
		return arr;
	}

	// получаем опорное число из середины массива
	let index_half_arr = Math.floor(arr.length / 2);
	let support_number = arr[index_half_arr];

	// получаю все элементы массива, которые меньше опорного,
	// рекурсивно отдаю из для сортировки
	let below = function () {
		let below_arr = [];
		for (let i = 0; i < arr.length; i++){
			// если индекс элемента равен индексу опорного элемента,
			// пропускаем его, он будет учтен в дальнейшем
			if(i === index_half_arr){
				continue;
			}
			if(arr[i] < support_number){
				below_arr.push(arr[i]);
			}
		}
		return quickSort(below_arr);
	}();

	// получаю все элементы массива, которые больше или равны опорному,
	// рекурсивно отдаю из для сортировки
	let big = function () {
		let big_arr = [];
		for (let i = 0; i < arr.length; i++){
			// если индекс элемента равен индексу опорного элемента,
			// пропускаем его, он будет учтен в дальнейшем
			if(i === index_half_arr){
				continue;
			}
			if(arr[i] >= support_number){
				big_arr.push(arr[i]);
			}
		}
		return quickSort(big_arr);
	}();

	return below.concat(support_number, big);
}