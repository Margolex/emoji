import { data } from "./data.js";

const grid = document.querySelector(".grid");
const search = document.querySelector(".input");

const deleteDublicate = str => { return [...new Set(str.split(' '))].join(" ") }
    
function filterData(obj) {
    let arr = []
    
    for (let el of obj) {
         arr.push({ ...el, keywords: deleteDublicate(el.keywords) });
    }
    return arr
}

const filteredData = filterData(data);
console.log(data)

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "box";
  card.innerHTML = `<p class="picture">${obj.symbol}</p>
                    <h2>${obj.title}</h2>
                    <p>${obj.keywords}</p>`;
  return card;
}

function funcSearch(event) {
  grid.innerHTML = "";
  let value = event.target.value.trim().toLowerCase();
  filteredData
    .filter(
      (elem) =>
        elem.title.toLowerCase().includes(value) ||
        elem.keywords.toLowerCase().includes(value)
    )
    .forEach((elem) => grid.append(createCard(elem)));
}

search.addEventListener("input", funcSearch);

filteredData.forEach((card) => grid.append(createCard(card)));




// function Box(cardArray) {
//     for (let el of cardArray) {
//       createCard(el);
//     }
// }
// Box(data)

// function createCard(obj) {
//     const wrap = document.createElement('div')
//     wrap.className = 'box';

//     const symbol = document.createElement('p');
//     symbol.className = "picture";
//     symbol.textContent = obj.symbol;

//     const title = document.createElement('h2');
//     title.textContent = obj.title;

//     const keywords = document.createElement('p');
//     keywords.textContent = obj.keywords;

//     wrap.append(symbol, title, keywords);
//     grid.append(wrap);
// }

// function funcSearch(value) {

//     let filteredArray = data.filter(
//       (el) =>
//         el.title.toLowerCase().includes(value) ||
//         el.keywords.toLowerCase().includes(value)
//     );
//     grid.innerHTML = '';
//     Box(filteredArray);

// }

// const search = document.querySelector(".input");

// search.addEventListener("input", (e) => funcSearch(e.target.value.trim().toLowerCase()));


