const helpers = require("./helpers");
const main = require("./old-from-ID.js")
//обобщенный алгоритм

//1. Получение данных
const filename = "people.json";
let list = helpers.getDataFromJSONFile(filename);
let userInput = getUserInput();

//2. Обработка данных
let results = 0; // результатом будет число
oldy_po_id(userInput, list)

//3. Вывод данных
outputData(results);    

//--- ЗАДАНИЯ

let fname;
let pname;
let lname;
function getFullNameByID(list, ID){
    for (let i = 0; People[i].ID == CurrentID; i++){
      if (People[i.ID == CurrentID]){  
        fname = People[i].firstName
        pname = People[i].parentName
        lname = People[i].lastName
      }
    }
        
    alert(fname + "  " +  pname + " " + lname);
}
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

// это функция, в которой происходит подсчет (если её вызвать)
function countOrphans(list) { // см. ниже комментарий 1
    
    let count = 0;
    for (let i = 0; i < list.length; i++){ // см. ниже комментарий 2
        let mother = list[i].mother;
        let father = list[i].father;
        if(mother === "" && father === "") {
            count++}
    }
        return count
    // ИСПРАВИТЬ: функция должна возвращать результат с помощью return;
};

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
getPersonWithBiggestChildrenCount (list);
// л) Найти человека с наибольшим количеством детей
function getPersonWithBiggestChildrenCount(
    list, // список с записями о людях
) {
    let person; 
    let amount=0;
    let curramount=0;
    let k;
    let y;
    let currid;
    let idowner;

    for (k=0;k<list.length;k++) {
        currid=list[k].ID;
        curramount=0;
          for (y=0;y<list.length;y++) {
            if (currid == list[y].mother || currid == list[y].father){
              curramount++;
              if (curramount>amount){
                amount=curramount;
                idowner=currid;
            }
          }
        }
    } 
    person=list[idowner-1].firstName+" "+list[idowner-1].paternalName+" "+list[idowner-1].lastName
    //console.log ('Наибольшее кол-во детей = '+amount);
    //console.log ('Ид человека = '+idowner);
    //console.log (person);
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
//Extra) Самый древний предок по ID
function oldy_po_id(userInput, list){
let AnswerFromFunction = main.MainFunct(userInput, list);
if (AnswerFromFunction != 'Такого человека не существует'){
result = AnswerFromFunction.user
gen = AnswerFromFunction.num}

if(result != "" && gen != 0){
    console.log("Самый дальний предок в " + JSON.stringify(gen, " ") + " поколении: " + JSON.stringify(result, " ") );
    }
    else console.log("Введенный ID не верен")

}
//-------- Вспомогательные функции

function getUserInput(){
//в зависимости от условий -- можно prompt, можно брать из аргументов
return 77;
}

function outputData( results ){
console.log( JSON.stringify(outputData, '   ') );
}