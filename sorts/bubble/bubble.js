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

bubbleSort(items);

async function bubbleSort(elements) {

	await function () {
		return new Promise((resolve)=>{
			setTimeout(()=>{
				resolve();
			},0)
		})
	}();

	for (let i = 0; i < elements.length; i++) {
		if (!(elements[i + 1]) || elements[i + 1].dataset.init) {
			elements[i].dataset.init = true;
			break;
		}
		const one = elements[i];
		const two = elements[i + 1];

		const h_one = one.clientHeight;
		const h_two = two.clientHeight;

		if (h_one > h_two) {
			two.after(one);
		}
	}

	if (elements[0].dataset.init) {
		return;
	} else {
		await bubbleSort(elements);
	}
}
