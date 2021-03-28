let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expensesArticleQuestion = prompt("Введите обязательную статью расходов в этом месяце", ""),
    expensesArticleAnswer = +prompt("Во сколько обойдется?", "");

appData.expenses = {
    [expensesArticleQuestion]: expensesArticleAnswer
};

if ( !isNaN(appData.budget) && !isNaN(appData.expenses[expensesArticleQuestion])) {
    let thirtyDaysBudget = appData.budget,
    compulsoryExpenses = appData.expenses[expensesArticleQuestion],
    result = (thirtyDaysBudget - compulsoryExpenses) / 30;
    if (result < 0 ) {
        alert("Ваши расходы превышают бюджет");
    } else {
        alert(`Бюджет на 1 день составляет ${result}`);
    }
} else {
    alert(`Вы ввели неверные данные`);
}
