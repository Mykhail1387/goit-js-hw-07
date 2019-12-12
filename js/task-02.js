'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const allIngredients = document.querySelector('#ingredients');
console.log('allIngredients:', allIngredients);
let li;
const vegetables = ingredients.map((ingr) => {
    li = document.createElement('li');
    li.classList = 'list';
    li.textContent = ingr;
    allIngredients.appendChild(li);
})