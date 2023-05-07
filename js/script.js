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


// https://ru.stackoverflow.com/questions/1301091/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA-%D1%81-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%BE%D0%BC-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-input

// const searchInput = document.querySelector('search-input');
// const searchBtn = document.querySelector('search-btn');
// const resultList = document.querySelector('result-list');

// const words = ['apple', 'banana', 'cherry', 'date', 'fig'];

// //Функция для поиска слов по первым буквам
function searchByFirstLetter(event6) {
	resultList.innerHTML = '';
	const firstLetter = searchInput.value.charAt(0);
	const filterWords = words.filter(word => word.charAt(0) === firstLetter);
	filterWords.forEach(word => {
		const li = document.createElement('li');
		li.innerText = word;
		resultList.appendChild(li);
	});
};
searchBtn.addEventListener('click', searchByFirstLetter);


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