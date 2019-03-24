var search_arr = [
	[
		[
			[],
			[
				[],
				[],
				[
					[],
					[
						[
							[]
						],
						[],
						[]
					]
				]
			]
		]
	],
	[
		[
			[],
			[
				[],
				[],
				[
					[],
					[
						[]
					]
				],
				['key']
			],
			[]
		],
		[]
	]
];

/**
 * Функция перебирает массив вложенных массивов
 * в поиске sting с помощью рекурсии
 * @param arr {array} - вложенные в друг друга массивы в которых производится поиск
 * @returns {string|boolean} - строка, которая была найдена или false, если ни чего не нашлось
 */
function searchRecursion(arr) {
	// перебираем все коробки
	for (var i = 0; i < arr.length; i++) {
		console.log(arr);
		// если встречается коробка, делаем рекурсию
		if (typeof arr[i] === "object") {
			var result = searchRecursion(arr[i]);
			// если результатом рекурсии была строка, возвращаем ее
			if (typeof result === "string") {
				return result;
			}
		} else if (typeof arr[i] === "string") {
			// если найдена строка, возвращаем ее
			return arr[i];
		}
	}
	return false;
}

console.log(searchRecursion(search_arr));


/**
 * Функция перебирает массив вложенных массивов в поиске sting
 * с помощью цикла while и так называемой очереди, которая состоит
 * из перебираемых массивов, и пополняется каждый раз,
 * как массив текущей итерации не пустой.
 * @param arr {array} - вложенные в друг друга массивы в которых производится поиск
 * @returns {string|boolean} - строка, которая была найдена или false, если ни чего не нашлось
 */
function searchQueue(arr) {
	// инициализируем очередь для коробок
	var queue = arr;
	// перебираем очередь
	var i = 0;
	while (queue.length !== 0) {
		console.log(queue);
		// если встречается коробка, ее внутренености выкладываем в конец очереди
		if (typeof queue[i] === "object") {
			if (queue[i].length !== 0) {
				var sub_arr = queue[i];
				for (var sub_index = 0; sub_index < sub_arr.length; sub_index++) {
					queue.push(sub_arr[sub_index]);
				}
				queue.splice(i, 1);
			} else {
				queue.splice(i, 1);
			}
			// если 'key', возвращаем его
		} else if (typeof queue[i] === "string") {
			return queue[i];
		}
	}
	return false;
}

//console.log(searchQueue(search_arr));
