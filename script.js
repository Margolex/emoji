import { data } from './data.js';

const grid = document.querySelector(".grid");

function Box(cardArray) {
    for (let el of cardArray) {
      createCard(el);
    }
}
Box(data)


function createCard(obj) {
    const wrap = document.createElement('div')
    wrap.className = 'box';
    
    const symbol = document.createElement('p');
    symbol.className = "picture";
    symbol.textContent = obj.symbol;

    const title = document.createElement('h2');
    title.textContent = obj.title;

    const keywords = document.createElement('p');
    keywords.textContent = obj.keywords;
    
    wrap.append(symbol, title, keywords);
    grid.append(wrap);
}


function funcSearch(value) {

    let filteredArray = data.filter(
      (el) =>
        el.title.toLowerCase().includes(value) ||
        el.keywords.toLowerCase().includes(value)
    );
    grid.innerHTML = '';
    Box(filteredArray);   

}

const search = document.querySelector(".input");

search.addEventListener("input", (e) => funcSearch(e.target.value.trim().toLowerCase()));


