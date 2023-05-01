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

document.addEventListener("keyup", func_search);

function func_search() {
	let input = document.getElementById("InputSearch");
	let filter = input.value.toUpperCase();
	let list__task = document.getElementById(".task__line");

	// Перебирайте все элементы списка и скрывайте те, которые не соответствуют поисковому запросу
	for (let i = 0; i < list__task; i++) {
		let a = list__task[i].getElementsByTagName()[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			list__task[i].style.display = "";
		} else {
			list__task[i].style.display = "none";
		}
	}
}

// https://ru.stackoverflow.com/questions/1301091/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA-%D1%81-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%BE%D0%BC-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-input

