/**
 * 
 * @param {array} collection Receive the collection of book to create a display button with an option to each authors
 */

export function createSelectWithAuthorsName(collection) {
    // create an array with the author name
  
    const divContainer = document.querySelectorAll(".div-container");
    const authors = [];
    const select = document.getElementById("select-author");
  
    for (let i = 0; i < collection.length; i++) {
      authors.push(collection[i].author);
    }
  
    const setAuthor = new Set(authors);
    const arrayAuthor = Array.from(setAuthor);
  
    // loop to create an option for each author name
  
    arrayAuthor.forEach((author) => {
      const option = document.createElement("option");
      option.textContent = author;
      option.value = author.toLowerCase();
      select.appendChild(option);
    });
  
    //add eventlistener to suppr books which don't match with the author name choose
  
    select.addEventListener("change", (e) => {
      divContainer.forEach((div) => {
        const authorName = div.querySelector(".author").textContent;
        const cleanName = authorName.replace("Author : ", "").toLowerCase();
        if (select.value === "all") {
          div.style.display = "grid";
        } else if (select.value !== cleanName) {
          div.style.display = "none";
        } else if (select.value === cleanName) {
          div.style.display = "grid";
        }
      });
    });
  }