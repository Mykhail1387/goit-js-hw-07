'use strict';

const categories = document.querySelectorAll('#categories > li');
console.log('categories:', categories);

categories.forEach((element) => {
    const paragraphName = element.querySelector('h2').textContent;
    const listLength = element.querySelectorAll('li').length;
    console.log(`Категория: ${paragraphName}; Количество элементов: ${listLength}`);
});


// const categories = document.querySelector('#categories');

// const categoriesItemByClass = document.querySelectorAll('.item');
// console.log('количество категорий:', categoriesItemByClass)

// const firstItem = document.querySelector('.item');
// const firstH2 = firstItem.querySelector('h2');
// const firstLi = firstItem.querySelectorAll('li');
// console.log(`Категория: ${firstH2.textContent}, Количество элементов: ${firstLi.length}`);

// const secondItem = firstItem.nextElementSibling;
// const secondH2 = secondItem.querySelector('h2');
// const secondLi = secondItem.querySelectorAll('li');
// console.log(`Категория: ${secondH2.textContent}, Количество элементов: ${secondLi.length}`);

// const lastItem = categories.lastElementChild;
// const lastH2 = lastItem.querySelector('h2');
// const lastLi = lastItem.querySelectorAll('li');
// console.log(`Категория: ${lastH2.textContent}, Количество элементов: ${lastLi.length}`);