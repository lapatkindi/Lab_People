const helpers = require("./helpers");
//обобщенный алгоритм

//1. Получение данных
const filename = "people.json";
let list = helpers.getDataFromJSONFile(filename);
let userInput = getUserInput();

//2. Обработка данных
let results = 0; // результатом будет число

//3. Вывод данных
outputData(results);    

//--- ЗАДАНИЯ
// а) Для конкретного человека (по ID) узнать текущий возраст (*?)
function getCurrentAgeByID(
    list, // список с записями о людях
    id, // id искомого человека
) {
    let age; 
    // (поместите ваш алгоритм сюда)
    return age;
}
// б) Найти человека в списке по части ФИО (*?)
function getPersonByName(
    list, // список с записями о людях
    substring, // подстрока имени
) {
    let person = null; 
    // (поместите ваш алгоритм сюда)
    return person; //запись с данными о человеке
}

// в) Найти всех людей с указанным днем рождения
function getPersonsByBirthday(
    list, // список с записями о людях
    birthday, // пользовательский ввод
) {
    let persons = []; 
    // (поместите ваш алгоритм сюда)
    return persons; //массив людей, пустой если никого
}

// г) Найти самого старого человека
function getTheOldestPerson(
    list // список с записями о людях
) {
    let person; 
    // (поместите ваш алгоритм сюда)
    return person; //запись о человеке, объект
}

// д) Посчитать сирот (не указаны отец и мать)
function getOrphansCount(
    list // список с записями о людях
) {
    let count; 
    // (поместите ваш алгоритм сюда)
    return count; //число сирот
}

// е) Найти сколько людей родились до 1941
function getVeteransCount(
    list // список с записями о людях
) {
    let count; 
    // (поместите ваш алгоритм сюда)
    return count; //число ветеранов
}

// ж) Вычислить в каком месяце больше всего ДР
function getTheMostBirthdaysMonth(
    list, // список с записями о людях
) {
    let mostBirthdaysMonth; 
    // (поместите ваш алгоритм сюда)
    return mostBirthdaysMonth; // номер месяца (от 1 до 12)
}

// з) Узнать процент ныне живущих из всех указанных в списке
function getLivingPersonsPercent(
    list, // список с записями о людях
) {
    let percent; 
    // (поместите ваш алгоритм сюда)
    return percent; //процент с округлением вниз
}

// и) Вычислить у скольки (в %) человек день рождения в (указанном пользователем) месяце
function getBirsdaysPercentByMonth(
    list, // список с записями о людях
    month, // номер месяца (от 1 до 12)
) {
    let percent; 
    // (поместите ваш алгоритм сюда)
    return percent; //процент с округлением вниз
}

// к) Узнать количество братьев и сестер у человека (по ID)
function getSiblingsCountByID(
    list, // список с записями о людях
    id, // id человека
) {
    let count = 0; 
    // (поместите ваш алгоритм сюда)
    return count; //число
}

// л) Найти человека с наибольшим количеством детей
function getPersonWithBiggestChildrenCount(
    list, // список с записями о людях
) {
    let person; 
    // (поместите ваш алгоритм сюда)
    return person; //
}

// м) Проверить, есть ли у человека дядя или тётя
function a(
    list, // список с записями о людях
    id, date, // пользовательский ввод
) {
    let result; 
    // (поместите ваш алгоритм сюда)
    return result;
}

// задачка-пример
function getFullNameByID(list, id){

    return ``// TODO
}

//-------- Вспомогательные функции

function getUserInput(){
//в зависимости от условий -- можно prompt, можно брать из аргументов
return "10.12.1990";
}

function outputData( results ){
console.log( JSON.stringify(outputData, '   ') );
}