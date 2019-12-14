'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulIngredients = document.querySelector('#ingredients');
console.log('ulIngredients:', ulIngredients);

const createSiblingLi = document.createElement('li');

const createListLi = (array) => array
    .map((ingr) => {
        const createLi = document.createElement('li');
        createLi.classList = 'list';
        createLi.textContent = ingr;
        createSiblingLi.append(createLi);
    });

createListLi(ingredients);

ulIngredients.append(createSiblingLi);