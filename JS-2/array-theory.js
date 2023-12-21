const names = ['Илья', 'Алексей', 'Ксения', 'Виктория'];
const people = [
	{ name: 'Илья', budget: 4200 },
	{ name: 'Алексей', budget: 15100 },
	{ name: 'Ксения', budget: 300 },
	{ name: 'Виктория', budget: 7520 },
];

/* ИЗМЕНЕНИЯ 
names.push('Алена'); // добавляет в конец массива

console.log('Names: ', names);

names.unshift('Алена'); // добавляет в начало массива, работает дольше, так как меняет индекс всему списку элементов

names.shift(); //удаляет первый элемент
names.pop(); // удаляет последний элемент
*/

/* REVERSE
// console.log(names.reverse()); // мутирует массив и меняет изначальный
const reversed = names.toReversed();
console.log(reversed); // мутирует массив но не меняет его изначальную форму
console.log(names);
*/

/*  SORT
const letters = ['e', 'c', 'd', 'b', 'a'];
console.log(letters);
// console.log(letters.sort()); // Сложная тема, нужна не часто, но иногда может пригодится, можно через функцию добавить условия сортировки.
console.log(letters);

console.log(
  letters.sort(function (a, b) {
    return a - b;
		// return a.charCodeAt(0) - b.charCodeAt(0); charCodeAt(0) сортировка через индексы массива.
	})
  );
  
  console.log(letters.toSorted());
  console.log(letters);
 */

/*SPLICE 

console.log(names.splice(2, 1)); //Принимает в себя в первую очередь индекс элемента с которого хотим начать работать, Мутирует изначальный элемент.
console.log(names);
console.log(names.toSpliced(2, 1));
console.log(names);
*/

//INDEXOF Нахождение элемента в массиве и его изменение
/*Классический способ - мутирует массив.
  const greatWoman = 'Ксения';
  const index = names.indexOf(greatWoman);
  names[index] = 'Ксения Великая';
  console.log(index);
  console.log(names[index]);
  console.log(names);
  */
/*Новый способ метод with - меняет только в момент взаимодействия
  const greatWoman = 'Ксения';
  const index = names.indexOf(greatWoman);
  console.log(index);
  const newNames = names.with(index, 'Ксения Великая');
  console.log(names);
  console.log(newNames); // взаимодействие
  */

//MAP - работа с каждым элементом, всегда возвращает массив с измененными данными
/*
const capitalNames = names.map(function (name) {
	const newName = name + '!';
	return newName; //Важно, возвращать, или работать не будет
});

console.log(capitalNames);

//Можно писать некоторые задачи так:

const smallNames = names.map(function (name) {
	return name.toLowerCase();
});

console.log(smallNames);

// Бывают задачи когда нужно получить целый массив но изменить только один элемент

const bigNames = names.map(function (name, index) {
	if (index === 2) {
		return 'КСЕНИЯ';
	}
	return name;
});

console.log(bigNames);
*/

// Проверка есть ли такой элемент в массиве includes
// console.log(names.includes('Илья'));
// console.log(names.indexOf('Илья'));
// console.log(names.indexOf('Илья') !== -1);

//РАБОТА С ОБЪЕКТАМИ

/*
// console.log(people.indexOf({ budget: 7520 })); // не работает

// let findedPerson;

// Работает но так не нужно делать
// for (let person of people) {
// 	if (person.budget === 7520) {
// 		findedPerson = person;
// 	}
// }

const finded = people.findIndex(function (person) {
	// if (person.budget === 7520) {
	// 	return true;
	// }
	return person.budget === 7520;
});

console.log(people[finded]);

//Супер пупер метод, пока рано применять его.
// const finded = people.find(p => p.budget === 300);
// console.log(finded);
*/

/*Метод Filter 

const filtered = people.filter(function (p) {
  return p.budget > 5000;
});

console.log(people);
console.log(filtered);

//Пример задачи, посчитать бюджет людей которые имеют бюджет более 5000

//Способ №1
let sumBudget = 0;
const filtered = people.filter(function (p) {
  return p.budget > 5000;
});

console.log(filtered);

filtered.forEach(function (p) {
  sumBudget = sumBudget + p.budget;
});

console.log(sumBudget);


//Способ №2
const sumBudget = people
.filter(p => p.budget > 5000)
.map(p => p.budget)
.reduce((acc, p) => acc + p, 0);

console.log(sumBudget);

//Задачка про строчки - перевернуть строку наоборот

const string = 'Привет, как дела?';
const reversed = string.split('').toReversed().join(''); // метод сплит, строку превращает в массив

console.log(reversed);
*/
