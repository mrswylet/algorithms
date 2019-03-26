const width = 640;
const height = 1740;

console.log(maxSquare(width, height));


/**
 *
 * @param width
 * @param height
 * @return {*}
 */
function maxSquare(width, height) {
	// определяем, что больше, width or height
	if(height === width){
		// базовый случай, если ширена равна высоте,
		// то мы имеем квадрат, а значит это и будет результат функции
		return height;
	} else if(width < height){
		// если ширена меньше высоты, меняем их местами
		// делаем так только потому, что автору так удобнее
		var x = height;
		height = width;
		width = x;
	} else {
		// если ширена больше высоты, ни чего не делает,
		// просто продолжаем программу
	}

	// получаем разницу от деления
	var residue = width % height;
	if(residue === 0){
		// если разница равна 0, то мы получили базовый случай,
		// когда ширена в два раза больше высоты, следовательно
		// высота и будем результатом выполнения функции
		return height;
	} else {
		// отправляем разницу от деления и высоту как новый прямоугольник
		// в рекурсивный вызов, реализуем алгоритм Евклида
		return maxSquare(residue, height)
	}
}