let title = "js_long_may_2024_GLO",
  screens = "Простые, Сложные, Интерактивные",
  screenPrice = 10500,
  rollback = 75,
  fullPrice = 500000,
  adaptive = true;

let array = screens.toLowerCase().split(",");

console.log(typeof title, fullPrice, adaptive);
console.log(screens.length);
console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " рублей. Стоимость разработки сайта " +
    fullPrice +
    " рублей"
);
console.log(array);
console.log(fullPrice * (rollback / 100));

/*
2) Используя методы и свойства:

    Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль
    Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100)) */
