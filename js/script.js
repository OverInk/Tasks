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



// Добавление задачи (проба)
const addTaskModal = document.getElementById("add-task-modal");
const closeBtn = document.querySelector(".close");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const addTaskForm = document.getElementById("add-task-form");

// Отображение модального окна
addTaskBtn.addEventListener("click", function () {
	addTaskModal.style.display = "block";
});

// Закрытие модального окна
closeBtn.addEventListener("click", function () {
	addTaskModal.style.display = "none";
});

// Добавление задачи
addTaskForm.addEventListener("click", function (event) {
	event.preventDefault();

	// Получение данных из формы
	const taskName = document.getElementById("task-name").value;
	const taskDesc = document.getElementById("task-desc").value;

	// Создание нового элемента списка
	const li = document.createElement("li");
	const h3 = document.createElement("h3");
	const p = document.createElement("p");

	h3.textContent = taskName;
	p.textContent = taskDesc;

	li.appendChild(h3);
	li.appendChild(p);

	taskList.appendChild(li);

	// Очистка формы и закрытие модального окна
	addTaskForm.reset();
	addTaskModal.style.display = "none";
});




// МОЯ ПРОБА
// const button__task = document.querySelector('.button__new-task');
// const form__newtask = document.querySelector('.js__button');
const holdList = document.querySelector('.hold');

form__newtask.addEventListener("submit", function (eventt) {
	eventt.preventDefault();

	const taskName = document.getElementById('task-name').value;
	const divMine = document.createElement('div');
	divMine.classList.add('task-line');
	const divText = document.createElement('div');
	divText.classList.add('task__name-text');

	divText.textContent = taskName;
	divMine.appendChild(divText);
	holdList.appendChild(divMine);

	form__newtask.reset();
});


// Кнопка для редактирования. Появляется окошко COMPLETED
const editTask = document.querySelector('.button__edit');
const completedTask = document.querySelector('.close__after-js');

editTask.addEventListener('click', function (e) {
	e.preventDefault(); // Убирается дефолтное поведение браузера
	completedTask.classList.add('active');
});
document.addEventListener('click', (e) => {
	if (e.target === editTask) {
		completedTask.classList.remove('active');
	}
});

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

// назначаем обработчик события на кнопку поиска
searchBtn.addEventListener('click', searchByFirstLetter);


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