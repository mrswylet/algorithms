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
		'v': 13
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
	let costs_nodes = {};
	// таблица родителей узлов
	let parents_nodes = {};
	// список обработанных узлов
	let processed_nods = {};

	// проверяем присудствие в граффе стартового узла
	const list_new_node = graph[star_point];
	if(!list_new_node){
		return {
			status: 'error',
			message: 'Graph has not start point'
		}
	}

	// вносим в таблицу стоймости узлов первый стартовый узел
	addNode({costs_nodes, parents_nodes, current_node: star_point, graph});

	// находим узел с наменьшей стоймостью среди необработанных
	let current_node = getNodeLowest(costs_nodes, processed_nods);
	// перебираем в цикле все не обработанные узлы
	while (current_node) {
		// проверяем всех соседей текащего усла
		// обновляем вес и родителя соседа, если это нужно
		addNode({costs_nodes, current_node, graph, parents_nodes});

		// помечаем узел как обработанный
		processed_nods[current_node] = true;

		// обновляем узел с наименьшим весом  среди необработанных
		current_node = getNodeLowest(costs_nodes, processed_nods);
	}

	return {
		costs_nodes,
		parents_nodes,
		processed_nods
	};
}


/**
 * Function adds new nodes and a nodes' cost in the table "costs_node", or update nodes' cost if it need it
 * @param object {object} - object with data, it is describe below.
 * @param object.costs_nodes {object} - hash table with nodes' costs - {'node_name': cost}.
 * @param object.parents_nodes {string} - hash table with nodes' parents - {'node': 'node_parent'}.
 * @param object.graph {object} - the graph passed for search "finish point".
 * @param object.current_node {object} - graph's node currently process.
 * @returns {boolean} - return false if neighbors aren't be, else true
 */
function addNode({costs_nodes, parents_nodes, current_node, graph}) {
	const neighbors = graph[current_node];

	// checking existence of neighbors
	if (Object.keys(neighbors).length === 0) {
		return false;
	}

	for (let neighbor_node in neighbors) {
		if (!neighbors.hasOwnProperty(neighbor_node)) {
			continue;
		}

		debugger;



		const neighbor_node_value = neighbors[neighbor_node];
		const cost_node_value = costs_nodes[neighbor_node];

		if(!cost_node_value){
			const cost_current_node_value = costs_nodes[current_node] || 0;

			costs_nodes[neighbor_node] = cost_current_node_value + neighbor_node_value;
			parents_nodes[neighbor_node] = current_node;
		} else {
			const cost_current_node_value = costs_nodes[current_node] || 0;

			let new_cost_node_value = cost_current_node_value + neighbor_node_value;

			if(new_cost_node_value < cost_node_value){
				costs_nodes[neighbor_node] = new_cost_node_value;
				parents_nodes[neighbor_node] = current_node;
			}
		}
	}

	return true;
}


/**
 * Function finds
 * @param costs_nodes
 * @param processed_nods
 * @returns {string}
 */
function getNodeLowest(costs_nodes, processed_nods) {
	let lowest_value = Infinity;
	let lowest_node;

	for (let current_node in costs_nodes) {
		if (!costs_nodes.hasOwnProperty(current_node)) {
			continue;
		}

		if(processed_nods[current_node] !== undefined){
			continue;
		}

		const new_node_value = costs_nodes[current_node];

		if(new_node_value < lowest_value){
			lowest_value = new_node_value;
			lowest_node = current_node;
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