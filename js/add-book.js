export function addANewBook() {
  const nameInput = document.getElementById("name-book").value;
  const authorInput = document.getElementById("author-name").value;
  const dateInput = document.getElementById("date-of-publication").value;
  const pagesInput = document.getElementById("pages").value;

  const imgInput = document.getElementById("image");

  // const imgFile = imgInput.files[0];
  // const fr = new FileReader();
  // fr.onload = () => {
  //   fr.result;
  // };

  // const img = fr.readAsDataURL(imgFile);

  const newBook = {
    name: nameInput,
    author: authorInput,
    publicationDate: dateInput,
    pages: pagesInput,
    coverage: imgInput,
    amazon: "#",
  };

  localStorage.setItem(`books_${localStorage.length}`, JSON.stringify(newBook));
}
