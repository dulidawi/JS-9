// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

function logItems(array) {
  for (let items = 0; items < array.length; items += 1) {
    console.log(`${items + 1} ${array[items]}`);
  }
}

logItems(["Apple", "Banana", "Grape", "Pineapple"]);

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const edditedMessage = message.split(" ");
  const amount = edditedMessage.length;
  const price = amount * pricePerWord;
  return price;
}
console.log(calculateEngravingPrice("I love you, sweetheart!", 14));

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  const edditedString = string.split(" ");
  let longestWord = edditedString[0];
  for (let i = 0; i < edditedString.length; i += 1) {
    if (longestWord.length < edditedString[i].length) {
      longestWord = edditedString[i];
    }
  }
  console.log(longestWord);
}
findLongestWord("I love you!");

// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) {
  const edditedString = string.toLowerCase();
  if (edditedString.length <= 40) {
    return edditedString;
  } else {
    return edditedString.slice(0, 41) + "...";
  }
}
const message =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at molestias dolor asperiores sint possimus? Non corrupti odit incidunt dignissimos iusto veniam impedit! Perferendis molestiae at asperiores autem adipisci qui!";
console.log(formatString(message));

// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
    const edditedMessage = message.toLowerCase();
    return edditedMessage.includes("spam") || edditedMessage.includes("sale");
}
console.log(checkForSpam("Функція перевіряє її на вміст слів spam і sale"));

// Напиши скрипт з наступним функціоналом:

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.
 