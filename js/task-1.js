const categoriesList = document.querySelector('#categories');
const categoriesCount = categoriesList.querySelectorAll('.item').length;
console.log(`Total categories: ${categoriesCount}`);
categoriesList.querySelectorAll('.item').forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryItemsCount = category.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName}, Items count: ${categoryItemsCount}`);
})