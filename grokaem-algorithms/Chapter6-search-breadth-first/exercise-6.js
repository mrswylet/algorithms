const graph1 = {
	'you': ['bob', 'claire', 'alice'],
	'alice': ['reggy'],
	'bob': ['reggy', 'anuj'],
	'claire': ['thom', 'jonny'],
	'thom': [],
	'jonny': [],
	'reggy': [],
	'anuj': [],
};
const graph2 = {
	'you': ['bob', 'claire', 'alice'],
	'alice': ['you', 'reggy'],
	'bob': ['you', 'reggy', 'anuj'],
	'claire': ['you', 'thom', 'jonny'],
	'thom': ['claire', 'afa'],
	'jonny': ['claire'],
	'reggy': ['bob', 'alice'],
	'anuj': ['bob'],
};

const target_item = 'bob';

console.log(searchBreadthFirst(graph2, 'you', target_item));


/**
 * Функция для поиска в ширену по узаканному граффу
 * @param graph {object} - граф, в котором производится поиск
 * @param start {string} - позиция, с которой нужно начать искать
 * @param target_item {string} - искомый узел
 */
function searchBreadthFirst(graph, start, target_item) {

	let queue = [];
	let searched = {};

	// добавляем стартовую позиции в очередь
	if (Array.isArray(graph[start])) {
		for (let value of graph[start]) {
			queue.push(value);
		}
	} else {
		console.error(`Позиция с которой нужно начать поиск: ${start} - не является массивом`);
		return;
	}
	debugger
	// переберает очередь
	while (queue.length !== 0) {
		// извлекаем позицию из очереди
		let check_item = queue.shift();
		// проверяем, не проверялась ли уже позиция
		if (searched[check_item] !== undefined) {
			continue;
		}
		// проверяем позицию на искомую
		if (_isTargetItem(check_item)) {
			// 	если да, завершаем поиск, выводим наеденный результат
			return check_item;
		} else {
			// если нет,
			// добавляем позицию в список проверенных
			searched[check_item] = true;
			// добавляем подпозиции в очередь
			let is_check_item_array = Array.isArray(graph[check_item]);
			if (is_check_item_array && graph[check_item].length !== 0) {
				for (let value of graph[check_item]) {
					queue.push(value);
				}
			}
		}
	}
	return false;
}

/**
 * Функция проверки, является ли переданный узел графа искомым
 * @param item {string} - переданный узел графа
 * @return {boolean}
 * @private
 */
function _isTargetItem(item) {
	return item === target_item;
}