const categories = document.getElementsByClassName('item')

console.log(`Number of categories: ${categories.length}`);

const itemElements = document.querySelectorAll('.item');
itemElements.forEach((itemElement) => {
    const title = itemElement.querySelector('h2').textContent;
    const countElements = itemElement.getElementsByTagName('li');
    console.log(`Category: ${title}`);
    console.log(`Elements: ${countElements.length}`);
})