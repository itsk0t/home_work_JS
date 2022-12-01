'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
		time = prompt('Введите дату в формате YYYY-MM-DD', '');
	}
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
	
		if ( (typeof(a)) === "string" && (typeof(a) != null ) && (typeof(b)) != null 
			&& a != "" && b != "" && a.length < 50) {
			appData.expenses[a] = b;
		} else {
			i--;
		}
	}
}

chooseExpenses();

function chooseOptExpenses() {
	let b = 1;
	for (let i = 0; i < 3; i++) {
		let a = prompt("Введите необязательную статью расходов в этом месяце", '');
	
		if ( (typeof(a)) === "string" && (typeof(a) != null ) && (typeof(b)) != null 
			&& a != "" && b != "" && a.length < 50) {
			appData.expenses[b] = a;
			b += 1;
		} else {
			i--;
		}
	}
}

chooseOptExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();

	alert("Бюджет на 1 день:" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log ("Это минимальный уровень достатка!");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log ("Это средний уровень достатка!");
	} else if (appData.moneyPerDay > 2000) {
		console.log ("Это высокий уровень достатка!");
	} else {
		console.log ("Произошла ошибка");
	}
}

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход вмесяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();