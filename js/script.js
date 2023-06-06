"use strict"

const button__task = document.querySelector('.button__new-task');
const form__newtask = document.querySelector('.js__button');
const closeForm = document.querySelector('.btn-cancel');

// Показывает окошко при нажатии ADD NEW (TASK)
button__task.addEventListener('click', function (e) {
	e.preventDefault(); // Убирается дефолтное поведение браузера
	form__newtask.classList.add('active');
});

// При нажатии CLOSE закрывается форма
closeForm.addEventListener('click', () => { //обработчик на Close
	form__newtask.classList.remove('active');
});

//Если нажали снова на ADD NEW . то форма тоже закроется
document.addEventListener('click', (e) => {
	if (e.target === button__task) {
		form__newtask.classList.remove('active');
	}
});


// МОЯ ПРОБА
// const button__task = document.querySelector('.button__new-task');
// const form__newtask = document.querySelector('.js__button');
const holdList = document.querySelector('.hold');
const taskInput = document.getElementById('task-name');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];


// form__newtask.addEventListener("submit", function (eventt) {
// 	eventt.preventDefault();

// 	const taskLine = document.querySelector('.task__line');
// 	const divMine = document.createElement('div');
// 	divMine.classList.add('task__line');
// 	divMine.innerHTML = taskLine.innerHTML;
// 	const divText = document.createElement('div');
// 	divText.classList.add('task__name-text');

// 	divMine.querySelector('.task__name-text').textContent = document.getElementById('task-name').value;

// 	holdList.appendChild(divMine);

// 	form__newtask.reset();


// if (tasks.length < 1000) {
// 	tasks.forEach(function (task) {
// 		addTask(task);
// 	});
// }
// НЕУДАВШАЯ ПОПЫТКА
form__newtask.addEventListener("submit", function (eventt) {
	eventt.preventDefault();
	const task = taskInput.value.trim();
	if (task !== '') {
		addTask(task);
		form__newtask.reset();
	}
});

function addTask(task) {
	const divInput = document.createElement('div');
	divInput.textContent = task;
	divInput.classList.add('task__name-text');
	const taskLine = document.querySelector('.task__line');
	const divMine = document.createElement('div');
	divMine.classList.add('task__line');
	divMine.innerHTML = taskLine.innerHTML;
	divMine.querySelector('.task__name-text').textContent = task;
	holdList.appendChild(divMine);
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}


// ПОПЫТКА ПОИСКА
const searchInput = document.getElementById('input-search');
const searchBtn = document.getElementById('search-btn');
const resultsList = document.getElementById('results-list');

// массив со словами для поиска
const words = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew'];

// функция для поиска слов по первым буквам
function searchByFirstLetter(event) {
	// очищаем список результатов
	resultsList.innerHTML = '';

	// получаем первую букву из поля ввода
	const firstLetter = searchInput.value.charAt(0);

	// ищем слова, у которых первая буква соответствует введенной
	const filteredWords = words.filter(word => word.charAt(0) === firstLetter);

	// добавляем найденные слова в список результатов
	filteredWords.forEach(word => {
		const li = document.createElement('li');
		li.innerText = word;
		resultsList.appendChild(li);
	});
}


// СМЕНА ТЕМЫ НА ТЕМНУЮ И НАОБОРОТ ( с сохранением выбора)===========
let changeTemaBtn = document.querySelectorAll('.change-tema');
console.log(changeTemaBtn);
changeTemaBtn.forEach(button => {
	button.addEventListener('click', function () {
		let theme = this.dataset.theme;
		applyTheme(theme); //Вызываем функцию с таким названием
	});
});

function applyTheme(themeName) {
	document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
	changeTemaBtn.forEach(button => {
		button.style.display = 'block';
	});
	document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
	localStorage.setItem('theme', themeName);
};

let activeTheme = localStorage.getItem('theme');
if (activeTheme === null || activeTheme === 'light') {
	applyTheme('light');
} else if (activeTheme === 'dark') {
	applyTheme('dark');
};


//
const spisok = document.querySelectorAll('.spisok');
document.addEventListener("click", function (e) {
	spisok.forEach(function (drop) {
		if (!drop.contains(e.target) && !e.target.closest('.button__edit')) {
			spisok.querySelector('ul').classList.remove('show');
		};
	});
});

spisok.forEach(function (event) {
	event.querySelector('button').addEventListener("click", function (ev) {
		event.querySelector('ul').classList.toggle('show');
	});
});

const closeList = document.querySelectorAll('.close-list');
closeList.forEach(function (event) {
	event.addEventListener('click', function (e) {
		const list = event.closest('.close__after-js');
		list.classList.remove('show');
	});
});


const completedList = document.querySelectorAll('.completed-list');
const hold = document.querySelector('.hold');
const completed = document.querySelector('.completed');

completedList.forEach(function (event) {
	event.addEventListener("click", function (e) {
		const taskLine = event.closest('.task__line');
		const closeJs = event.closest('.spisok');
		closeJs.style.visibility = "hidden";
		taskLine.style.opacity = "0.2";
		completed.insertAdjacentElement('beforeend', taskLine);
	});
});