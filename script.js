/* лаба 1 */
console.log("Система учета регистраций запущена");

/* лаба 2 */

// список зарегистрированных пользователей
const users = [
    { id: 1, title: "user1", value: 1200, status: "new", createdAt: "2026-04-01" },
    { id: 2, title: "user2", value: 500, status: "done", createdAt: "2026-04-02" },
    { id: 3, title: "user3", value: 800, status: "new", createdAt: "2026-04-03" },
    { id: 4, title: "user4", value: 1500, status: "new", createdAt: "2026-04-04" },
    { id: 5, title: "user5", value: 300, status: "done", createdAt: "2026-04-05" },
    { id: 6, title: "user6", value: 950, status: "new", createdAt: "2026-04-06" }
];

// настройки приложения
const appConfig = {
    appTitle: "Учет регистрации",
    defaultStatus: "new",
    minValueForFilter: 800
};

// количество действий пользователя
let actionCount = 0;
actionCount++;
actionCount++;
actionCount++;

console.log("Количество действий:", actionCount);
console.log(appConfig);

const inputMinValue = "800";
const minValue = Number(inputMinValue);

if (Number.isNaN(minValue)) {
    console.log("Ошибка ввода");
} else {
    console.log("minValue:", minValue);
}

// проверка доступа: возраст от 18 до 65 и не заблокирован
const userAge = 19;
const isBlocked = false;

const hasAccess = userAge >= 18 && userAge < 65 && !isBlocked;
console.log("Доступ:", hasAccess);

const item = users[0];

switch (item.status) {
    case "new":
        console.log("Новая запись");
        break;
    case "done":
        console.log("Завершено");
        break;
    default:
        console.log("Неизвестный статус");
}

if (item.value >= 1000) {
    console.log("Высокое значение");
} else if (item.value >= 700) {
    console.log("Среднее значение");
} else {
    console.log("Низкое значение");
}


let newCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].status === "new") {
        newCount++;
    }
}

console.log("NEW пользователей:", newCount);


let index = 0;

while (index < users.length) {
    console.log("Пользователь:", users[index].title);
    index++;
}

function showOutput(text) {
    const output = document.getElementById("output");
    output.textContent = text;
}

function showAll() {
    let result = "ВСЕ ПОЛЬЗОВАТЕЛИ:\n\n";

    for (let i = 0; i < users.length; i++) {
        result += users[i].id + ". " +
            users[i].title + " | " +
            users[i].value + " | " +
            users[i].status + "\n";
    }

    showOutput(result);
}

// фильтрует только новых пользователей
function showNew() {
    let result = "НОВЫЕ ПОЛЬЗОВАТЕЛИ:\n\n";

    for (let i = 0; i < users.length; i++) {
        if (users[i].status === "new") {
            result += users[i].title + " - " + users[i].value + "\n";
        }
    }

    showOutput(result);
}

function showStats() {
    let sum = 0;
    let max = 0;
    let newCountStat = 0;

    for (let i = 0; i < users.length; i++) {
        sum += users[i].value;

        if (users[i].value > max) {
            max = users[i].value;
        }

        if (users[i].status === "new") {
            newCountStat++;
        }
    }

    let result =
        "СТАТИСТИКА:\n\n" +
        "Всего: " + users.length + "\n" +
        "Сумма value: " + sum + "\n" +
        "Максимум: " + max + "\n" +
        "NEW: " + newCountStat;

    showOutput(result);
}

// вешаю обработчики на кнопки после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnAll").addEventListener("click", showAll);
    document.getElementById("btnNew").addEventListener("click", showNew);
    document.getElementById("btnStats").addEventListener("click", showStats);
});