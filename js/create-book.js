import { main } from "./var.js";

/**
 *
 * @param {*} book
 * @returns
 * CREATE A DIV WITH COLLECTION INFORMATIONS
 */

export function createABookDiv(book, index) {

  // creation parent div
  const newDiv = document.createElement("div");

  // creation image
  const img = document.createElement("img");
  img.src = book.coverage;
  img.alt = `Couverture de ${book.name}`;
  img.classList.add("coverage");

  // creation title of the book
  const title = document.createElement("h2");
  title.textContent = book.name;

  // creation author name
  const author = document.createElement("p");
  author.textContent = `Author : ${book.author}`;
  author.classList.add("author");

  // creation of parution date
  const date = document.createElement("p");
  date.textContent = `Date of publication : ${book.publicationDate}`;
  date.classList.add("date");

  // creation number of pages
  const pages = document.createElement("p");
  pages.textContent = `Number of pages : ${book.pages}`;
  pages.classList.add("pages");

  // creation amazon logo
  const amazon = document.createElement("img");
  amazon.src = "assets/amazon.png";
  amazon.alt = "Logo amazon";
  amazon.classList.add("amazon-logo");

  // creation of the amazon link
  const amazonLink = document.createElement("a");
  amazonLink.setAttribute("href", book.amazon);
  amazonLink.setAttribute("target", "_blank");
  amazonLink.appendChild(amazon);
  amazonLink.classList.add("amazon-link");

  //creation of suppr button
  const supprButton = document.createElement("button");
  const supprImg = document.createElement("img");
  supprImg.src = "assets/fermer.png";
  supprImg.classList.add("suppr-img");
  supprButton.appendChild(supprImg);
  supprButton.classList.add("suppr-button");
  supprButton.addEventListener("click", (e) => {
    main.removeChild(newDiv);
    localStorage.removeItem(`books_${index}`);
  });

  // add everything in the parent div
  newDiv.appendChild(img);
  newDiv.appendChild(title);
  newDiv.appendChild(author);
  newDiv.appendChild(date);
  newDiv.appendChild(pages);
  newDiv.appendChild(amazonLink);
  newDiv.appendChild(supprButton);

  newDiv.classList.add("div-container");

  return newDiv;
}
