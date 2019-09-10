const list = document.querySelector('.list');

const width = list.clientWidth;
const height = list.clientHeight;

let json = [845, 850, 806, 148, 172, 304, 287];

for (let i = 0; i < width; i++) {
	const h_item = randomInteger(1, height);
	const div = document.createElement('div');
	div.style.height = `${h_item}px`;
	div.classList.add('item');
	list.append(div)
}

/*
for (let h_item of json){
	const div = document.createElement('div');
	div.style.height = `${h_item}px`;
	div.classList.add('item');
	list.append(div)
}
*/

function randomInteger(min, max) {
	var rand = min - 0.5 + Math.random() * (max - min + 1);
	rand = Math.round(rand);
	return rand;
}

const items = document.getElementsByClassName('item');

quickPyramidal(items)
	.then(
		(arr) => {
			console.log(arr)
		}
	);

async function quickPyramidal(elements) {
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
	let support_el = elements[index_half_elements];
	let support_height = support_el.clientHeight;

	// получаю все элементы массива, которые меньше опорного,
	// рекурсивно отдаю их для сортировки
	let below = await function () {
		let below_arr = [];
		for (let i = 0; i < elements.length; i++) {
			// если индекс элемента равен индексу опорного элемента,
			// пропускаем его, он будет учтен в дальнейшем

			let check_el = elements[i];
			if (check_el === support_el) {
				continue;
			}
			let check_height = check_el.clientHeight;

			if (check_height < support_height) {
				below_arr.push(check_el);
				check_el.style.backgroundColor = '#92ec6b';
			}
		}

		// показываем на экране все элементы массива, которые меньше опорного
		for(let el of below_arr){
			support_el.before(el);
			el.style.backgroundColor = '';
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
			let check_el = elements[i];
			if (check_el === support_el) {
				continue;
			}
			let check_height = check_el.clientHeight;

			if (check_height >= support_height) {
				big_arr.push(check_el);
			}
		}

		// показываем на экране все элементы массива, которые больше или равны опорному
		for(let el of big_arr){
			support_el.after(el);
		}
		return quickSort(big_arr);
	}();

	return below.concat(support_el, big);
}