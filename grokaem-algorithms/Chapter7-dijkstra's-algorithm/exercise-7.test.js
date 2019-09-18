const searchDijkstraAlgorithm = require('./exercise-7');

const graph_1 = {
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
const star_point_1 = 'a';
const finish_point_1 = 'v';

const graph_2 = {
	'a': {
		'b': 5,
		'c': 2,
	},
	'b': {
		'p': 4,
		'k': 2
	},
	'c': {
		'b': 8,
		'k': 7,
	},
	'p': {
		'd': 3,
		'k': 6
	},
	'k': {
		'd': 1,
	},
	'd': {}
};
const star_point_2 = 'a';
const finish_point_2 = 'd';

const graph_3 = {
	'a': {
		'b': 10,
	},
	'b': {
		'd': 20,
	},
	'd': {
		'c': 1,
		'v': 30,
	},
	'c': {
		'b': 1,
	},
	'v': {}
};
const star_point_3 = 'a';
const finish_point_3 = 'v';

const graph_4 = {
	'a': {
		'b': 2,
		'c': 2,
	},
	'b': {
		'c': 2,
	},
	'c': {
		'b': 2,
		'k': 2,
	},
	'd': {
		'b': -1,
		'k': 2
	},
	'k': {}
};
const star_point_4 = 'a';
const finish_point_4 = 'k';

test('exercise-7', () => {
	expect(searchDijkstraAlgorithm(graph_1, star_point_1, finish_point_1)).toBe('a (0) --> d (7) --> c (8) --> z (21) --> v (46)');
	expect(searchDijkstraAlgorithm(graph_2, star_point_2, finish_point_2)).toBe('a (0) --> b (5) --> k (7) --> d (8)');
	expect(searchDijkstraAlgorithm(graph_3, star_point_3, finish_point_3)).toBe('a (0) --> b (10) --> d (30) --> v (60)');
	expect(searchDijkstraAlgorithm(graph_4, star_point_4, finish_point_4)).toBe('a (0) --> c (2) --> k (4)');
});


