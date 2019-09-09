const list = document.querySelector('.list');

const width = list.clientWidth;
const height = list.clientHeight;


for (let i = 0; i < width; i++) {
	const h_item = randomInteger(1, height);
	const div = document.createElement('div');
	div.style.height = `${h_item}px`;
	div.classList.add('item');
	list.append(div)
}


function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}

const items = document.getElementsByClassName('item');

quickSort(items)
	.then(
		(arr) => {
			console.log(arr)
		}
	);

async function quickSort(elements) {
	// Базовый случай, сортировать не надо
	if (elements.length < 2) {
		return elements;
	}

	await function () {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, 0)
		})
	}();

	// получаем опорное число из середины массива
	let index_half_elements = Math.floor(elements.length / 2);
	let support_height = elements[index_half_elements].clientHeight;

	// получаю все элементы массива, которые меньше опорного,
	// рекурсивно отдаю их для сортировки
	let below = await function () {
		let below_arr = [];
		for (let i = 0; i < elements.length; i++) {
			// если индекс элемента равен индексу опорного элемента,
			// пропускаем его, он будет учтен в дальнейшем
			if (i === index_half_elements) {
				continue;
			}
			if (elements[i].clientHeight < support_height) {
				elements[index_half_elements].before(elements[i]);
				below_arr.push(elements[i]);
			}
		}
		return quickSort(below_arr);
	}();

	// получаю все элементы массива, которые больше или равны опорному,
	// рекурсивно отдаю из для сортировки
	let big = await function () {
		let big_arr = [];
		for (let i = 0; i < elements.length; i++) {
			// если индекс элемента равен индексу опорного элемента,
			// пропускаем его, он будет учтен в дальнейшем
			if (i === index_half_elements) {
				continue;
			}
			if (elements[i].clientHeight >= support_height) {
				elements[index_half_elements].after(elements[i]);
				big_arr.push(elements[i]);
			}
		}
		return quickSort(big_arr);
	}();

	/*if(big.length){
		elements[index_half_elements].after(big[0]);
	}
	if(below.length){
		elements[index_half_elements].before(below[0]);
	}*/

	return below.concat(elements[index_half_elements], big);
}