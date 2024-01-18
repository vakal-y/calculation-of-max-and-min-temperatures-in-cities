const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let citiesTemperatures = [];
// заполняю массив citiesTemperatures значениями температур, которые введет пользователь
for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}`);
    citiesTemperatures.push(Number(temperature))
}

// создаю новые объекты с текстом, где для каждого города будет отображена его температура
const container = document.querySelector('.container');
cities.forEach(function (city, i) {
    const string =
        `<p class='city'>Температура в ${city}: ${citiesTemperatures[i]}°C</p>`
    container.insertAdjacentHTML('beforeend', string);
})

// нахожу максимальную температуру из массива с температурами и вывожу в новый текст
let maxTemperature = Math.max(...citiesTemperatures);
const maxTemperatureInfo =
    `<h2 class='max-temperature'>Максимальная температура: ${maxTemperature}</h2>`;
container.insertAdjacentHTML('beforeend', maxTemperatureInfo);

// нахожу минимальную температуру из массива с температурами и вывожу в новый текст
let minTemperature = Math.min(...citiesTemperatures);
const minTemperatureInfo =
    `<h2 class='min-temperature'>Минимальная температура: ${minTemperature}</h2>`;
container.insertAdjacentHTML('beforeend', minTemperatureInfo);
