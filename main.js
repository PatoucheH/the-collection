import { createUIMain } from "./js/create-ui.js";
import { createSelectWithAuthorsName } from "./js/select.js";

let collectionBook = [];

collectionBook.forEach((books, index) => {
  localStorage.setItem(`books_${index}`, JSON.stringify(books));
});

function createMain() {
  createUIMain(collectionBook);
  createSelectWithAuthorsName(collectionBook);
}

document.addEventListener("DOMContentLoaded", () => {
  // collectionBook = [];
  // for (let i = 0; i < localStorage.length; i++) {
  //   collectionBook.push(JSON.parse(localStorage.getItem(`books_${i}`)));
  // }
  // createMain();

  fetch("collectionBook.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      collectionBook = data;
      createMain();
    })
    .catch((error) => {
      console.error("Erreur de chargement:", error);
      createMain();
    });
});
