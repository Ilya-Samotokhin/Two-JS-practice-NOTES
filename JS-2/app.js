/* theory 
// Массив- переменные в которой хранятся переменные

const array = [1, 2, 3, 5, 20, 42];
const arrayStrings = ['a', 'b', 'c', null, 12];
// const array = new Array(1, 2, 3, 5, 20, 42)

console.log(array);
console.log(arrayStrings);
// console.log(array.length); - длина массива
// console.log(array[0]); - выбор индекса массива
// console.log(array[array.length]); array[6] - шестого не существует, нужно вычеслить
console.log(array[array.length - 1]); //вычисляем последний элемент

array[0] = 'Privet'; // Изменение переменной в массиве
console.log(array);

//Добавление массива

array[array.length] = 'becon';
console.log(array);
*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value);

// const notes = ['запомнить блок про массивы', 'выучить теорию объектов'];

/*
  function render() {
    for (let i = 0; i < notes.length; i++) {
      listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));
    } Цикл способ №1, ниже способ №2

    for (let note of notes) {
      listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
    }

    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]));
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]));
  }
  render();
*/

/*
createBtn.onclick = function () {
  	if (inputElement.value.length === 0) {
    		return;
    	}
    
    	listElement.insertAdjacentHTML(
      		'beforeend',
      		getNoteTemplate(inputElement.value)
      	);
      	inputElement.value = '';
      };
      */

/*
function getNoteTemplate(title) {
  	return `
  		<li class='list-group-item d-flex justify-content-between align-items-center'>
  			<span>${title}</span>
  			<span>
  				<span class='btn btn-small btn-success'>&check;</span>
  				<span class='btn btn-small btn-danger'>&times;</span>
  			</span>
  		</li>
  		`;
  }
  */

/*Theory Object

// Создание объекта
const person = {
  firstName: 'Ilya',
	lastName: 'Samotokhin',
	year: 1997,
	hasGirlfriend: true,
	languages: ['ru', 'en'],
	getFullName: function () {
    console.log(person.firstName + ' ' + person.lastName);
	},
};

// вывод объекта
console.log(person.year);
console.log(person['languages']);
const key = 'hasGirlfriend';
console.log(person[key]);
person.getFullName();

*/

const notes = [
	{
		title: 'запомнить блок про массивы',
		completed: false,
	},
	{
		title: 'выучить теорию объектов',
		completed: true,
	},
];

function render() {
	listElement.innerHTML = '';
	if (notes.length === 0) {
		listElement.innerHTML = '<p>Нет элементов</p>';
	}
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
	}
}
render();

createBtn.onclick = function () {
	if (inputElement.value.length === 0) {
		return;
	}

	const newNote = {
		title: inputElement.value,
		completed: false,
	};
	notes.push(newNote);
	render();
	inputElement.value = '';
};

listElement.onclick = function (event) {
	// console.log(event.target);
	if (event.target.dataset.index) {
		const index = parseInt(event.target.dataset.index);
		const type = event.target.dataset.type;

		if (type === 'toggle') {
			// console.log('toggle', index);
			notes[index].completed = !notes[index].completed;
		} else if (type === 'remove') {
			// console.log('remove', index);
			notes.splice(index, 1);
		}
		render();
	}
};

function getNoteTemplate(note, index) {
	return `
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			<span class="${note.completed ? 'text-decoration-line-through' : ''}">${
		note.title
	}</span>
			<span>
				<span class='btn btn-small btn-${
					note.completed ? 'warning' : 'success'
				}' data-index="${index}" data-type="toggle">&check;</span>
				<span class='btn btn-small btn-danger' data-index="${index}" data-type="remove">&times;</span>
			</span>
		</li>
		`;
}
