const graph = {
	'you':		['bob', 'claire', 'alice'],
	'alice':	['you', 'reggy'],
	'bob':		['you', 'reggy', 'anuj'],
	'claire':	['you', 'thom', 'jonny'],
	'thom':		['claire', 'afa'],
	'jonny':	['claire'],
	'reggy':	['bob', 'alice'],
	'anuj':		['bob'],
};

console.log(searchBreadthFirst(graph, 'you', 'afa'));


/**
 *
 * @param graph {object} -
 * @param to {string} -
 * @param from {string} -
 */
function searchBreadthFirst(graph, to, from) {
	// очередь для поиска
	let queue = [];
	// количество сделанных шагов
	let step = 0;
	// Сюда мы помещаем уже проверенные элементы, что бы не проверять их снова
	let searched_node = {};
	// количество связей на текущем уровне
	let current_count_edge = 0;
	// количество связей, на следующем уровне
	let next_count_edge = 0;

	// занносим в очередь первый уровень
	// получаем количество ребер на первом уровне
	// обходим перевый уровень
	// если встречаются дальнейшие связи, добавляем их в очередь
	// пополняем количество узлов на следующем уровне
	// когда счетчит узлов на текущем уровне обнулится
		// увеличиваем счетчик шагов
		// вереходим на следующий уровень

	// первичное заполнение очереди
	addQueue(graph[to]);

	// заносим первый узел список проверенных элементов
	searched_node[to] = true;

	// перебираем очередь в поиске нужного узла
	while(queue.length !== 0){
		let node = queue.shift();

		// заносим узел в список проверенных элементов
		searched_node[node] = true;

		// Уменьшаем количество связей на текущем уровне,
		// т.к. узел извлечем из очереди для проверки
		current_count_edge--;
		// если количество связей на уровне уменьшилось до 0,
		// значит проверенны все узлы на текущем уровне.
		// увеличеваем количество сделанных шагов для поиска по графу
		if(current_count_edge === 0){
			step++;
			current_count_edge = next_count_edge;
		}

		if(node === from){
			step++;
			return {
				step: step,
				map: `Нашли - ${node}`,
			};
		} else {
			if(graph[node] !== undefined) {
				addQueue(graph[node])
			}
		}
	}

	return {
		step: step,
		map: 'Не нашли ни чего'
	};

	/**
	 * Функция добавляет все связные узлы от текущего узла в общую очередь
	 * @param current_level {array} -
	 */
	function addQueue(current_level) {
			let current_level_length = current_level.length;

			if(current_level_length !== 0){

				// проверяем количество не проверенных связей на текущем уровне
				if(current_count_edge === 0){
					// если связей нет,
					current_count_edge = current_level_length;
				} else {
					next_count_edge += current_level_length;
				}

				for(let i = 0; i < current_level.length; i++){
					let next_node = current_level[i];

					if(searched_node[next_node] === true){
						continue;
					}
					queue.push(next_node)
				}
			}


	}
}