import { main } from "./var.js";
import { createABookDiv } from "./create-book.js";


/**
 *
 * @param {array} collection of object
 * LOOP ON EVERY ITEMS AND ADD THEM TO THE MAIN
 */

export function createUIMain(collection) {
  collection.forEach((book, index) => {
    main.appendChild(createABookDiv(book, index));
  });
}
