const graph1 = {
	'a': {
		'b': 30,
		'c': 9,
		'd': 7
	},
	'b': {
		'f': 1
	},
	'f': {
		'v': 15
	},
	'c': {
		'z': 13
	},
	'z': {
		'v': 25,
		'k': 21
	},
	'd': {
		'c': 1,
		'z': 19,
		'x': 12
	},
	'x': {
		'k': 30
	},
	'k': {
		'v': 5
	},
	'v': {}
};


const star_point = 'a';
const finish_point = 'v';

console.log(searchDijkstraAlgorithm(graph1, star_point, finish_point));


/**
 *
 * @param graph {object} - граф, в котором производится поиск
 * @param star_point {string} - позиция, с которой нужно начать искать
 * @param finish_point {string} - искомый узел
 */
function searchDijkstraAlgorithm(graph, star_point, finish_point) {

	// таблица стоймости узлов
	let costs = {};
	// таблица родителей узлов
	let parents = {};
	// список обработанных узлов
	let processed = {};

	// вносим в таблицу стоймости узлов первый стартовый узел
	const list_new_node = graph[star_point];
	if(!list_new_node){
		return {
			status: 'error',
			message: 'Стартовая позиция отсутствует в переданном графе'
		}
	}
	addNode(costs, star_point, graph, parents);

	// находим узел с наменьшей стоймостью среди необработанных
	let current_node = getNode(costs, processed);
	// перебираем в цикле все не обработанные узлы
	while (current_node) {
		// добавляем в таблицу стоймости узлов соседние узлы
		const list_new_node = graph[current_node];

		// проверяем всех соседей текащего усла
		// обновляем вес и родителя соседа, если это нужно
		addNode(costs, current_node, graph, parents);

		// помечаем узел как обработанный
		processed[current_node] = true;

		// обновляем узел с наименьшим весом  среди необработанных
		current_node = getNode(costs, processed);
	}

	return {
		costs,
		parents,
		processed
	};
}


/**
 *
 * @param target_list {object} -
 * @param current_node {string} -
 * @param graph {object} -
 * @param parents {object} -
 * @returns {boolean}
 */
function addNode(target_list, current_node, graph, parents) {
	const list_new_node = graph[current_node];
	if (Object.keys(list_new_node).length === 0) {
		return false;
	}

	for (let new_node in list_new_node) {
		if (!list_new_node.hasOwnProperty(new_node)) {
			continue;
		}

		const pre_node_value = list_new_node[new_node];

		if (target_list[new_node]) {
			const cost_node = target_list[new_node];
			const cost_current_node = target_list[current_node];
			const new_node_value = cost_current_node + pre_node_value;

			if(new_node_value < cost_node){
				target_list[new_node] = new_node_value;
				parents[new_node] = current_node
			}
		} else {
			target_list[new_node] = pre_node_value;
			parents[new_node] = current_node
		}
	}

	return true;
}


/**
 *
 * @param list_node
 * @param list_node_processed
 * @returns {string}
 */
function getNode(list_node, list_node_processed) {
	let lowest_value = Infinity;
	let lowest_node;

	for (let new_node in list_node) {
		if (!list_node.hasOwnProperty(new_node)) {
			continue;
		}

		if(list_node_processed[new_node] !== undefined){
			continue;
		}

		const new_node_value = list_node[new_node];

		if(new_node_value < lowest_value){
			lowest_value = new_node_value;
			lowest_node = new_node;
		}
	}

	return lowest_node;
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