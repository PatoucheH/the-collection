const collection = [
  {
    name: "Plus malin que le diable",
    author: "Napoleon Hill",
    publicationDate: 1938,
    pages: 320,
    coverage: "assets/coverage-plus-malin-que-le-diable.jpg",
    amazon:
      "https://www.amazon.fr/Plus-malin-Diable-Napoleon-Hill-ebook/dp/B00HFY5QYY/ref=sr_1_1?crid=233L385R3ZEFJ&dib=eyJ2IjoiMSJ9.eUoXkQ_KoPaIJgDIiE47xKxUVk_RIrXb-8JrDtpy8Q3olXh5hC90dzfnO3IZnhw8scAYc_a09nKhFxZSje5PybXvp1VtD-JZsJCJHOi-d-_GNqAE84a0QI3n3VhD4RAbVGXrL5Ofo6Ybbrh1lyjX0_-BOtnWB3FkVuLIJMbtIIs.-_dDCImWCrezbzDq60ktWgJOKVSx4dII8c0oUsz48Ys&dib_tag=se&keywords=plus+malin+que+le+diable+napoleon+hill+livre&qid=1741783790&sprefix=%2Caps%2C107&sr=8-1",
  },
  {
    name: "Réfléchissez et devenez riche",
    author: "Napoleon Hill",
    publicationDate: 1937,
    pages: 254,
    coverage: "assets/coverage-reflechissez-et-devenez-riche.jpg",
    amazon:
      "https://www.amazon.fr/R%C3%A9fl%C3%A9chissez-devenez-riche-Napoleon-Hill/dp/2922405303/ref=sr_1_3?crid=ZGDGOMEQPCX8&dib=eyJ2IjoiMSJ9.VNtJVogITiieqBz8cyf6XwaAxyFTGIZC6HBex_HLZs8R10lLEBDkCxPXjjybLQgmQ9ZwetGRUGi3fen6l_NPG4gzY-9WuZPFTPPCxytlViiKsy4DQhjfR60PGSa-dpkGVdcOKeIkPYNjb5tHLqkYEgidXXB-_9Fp0WEY6Q6l-tAwq3pIp2Fk_c7E3YIBogJMvDdRyOF0o-RY70HU19hncZ7_fyYZanrKXFfTHRglj6XLpEeoGF2MxPYZAUcIV59ZJpNd_DHI_h-qBrLYaP8PWzeTPBR1f_MU_bDo7U7hJ9YVZIMExLrTD-C-jFwq8GpFf1BywUN7_XQMMW6a3oXyxCv27SJSMx2AIYIdDls4qsRqoYJ_ldoZBkRxB4UT7NTFPkaJjz99D3yiIWjea8PlqQ3gKYKskUx9PwQGJMwl_uHcpLxuhq3lU2TlBxJonyMf.haXY7HlHxMwr4Ps8JFSdGAZuZTGa4o6laH7zLfsk2rU&dib_tag=se&keywords=r%C3%A9fl%C3%A9chissez+et+devenez+riche+de+napol%C3%A9on+hill&qid=1741783764&sprefix=%2Caps%2C248&sr=8-3",
  },
  {
    name: "Les jardins de Zagarand",
    author: "Eric de Kermel",
    publicationDate: 2021,
    pages: 288,
    coverage: "assets/coverage-les-jardins-de-zagarand.jpg",
    amazon:
      "https://www.amazon.fr/jardins-Zagarand-%C3%89ric-Kermel/dp/2290361259/ref=sr_1_1?crid=3UXP5VNA6JURV&dib=eyJ2IjoiMSJ9.N3MWLbarG5OM8YcHz7Dy7Q.oNUy2RXS_Qu7c11w3oKxpZcqSjpndV2Mfb3vEnj0RMM&dib_tag=se&keywords=les+jardins+de+zagarand&qid=1741783734&sprefix=%2Caps%2C259&sr=8-1",
  },
  {
    name: "Island",
    author: "Aldous Huxley",
    publicationDate: 1962,
    pages: 286,
    coverage: "assets/coverage-island.jpg",
    amazon:
      "https://www.amazon.fr/Island-Aldous-Huxley-ebook/dp/B003100UPG/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dib=eyJ2IjoiMSJ9.be3PIJWWR0AjZE08LWIlKxmPI8_ZpqUx6TULvZbdqX9AqrLo8unsSRuPX2OUMnZJ48O5mJjERWTTYiOVevpdjvGAar3GiOVGLfPfaEXK5xcVl5JLieUfRS-vZI_tleOpjELmcIdl31CWmdPDMiOE6g.fe5y9H2BK0_unPiHhWUau6D_1M3Zg2pFGVRmXCfHoGw&dib_tag=se&keywords=aldous+huxley+island+anglais&qid=1741783892&sr=8-1",
  },
  {
    name: "Coder proprement",
    author: "Robert C. Martin ",
    publicationDate: 2019,
    pages: 457,
    coverage: "assets/coverage-coder-proprement.jpg",
    amazon:
      "https://www.amazon.fr/Coder-proprement-Robert-C-Martin/dp/232600227X/ref=sr_1_1?crid=1O7ABKVS7CUKW&dib=eyJ2IjoiMSJ9.k4C0j2mk7htO4V1mPf8G-lJkZ0hoyf2XA3P37HG98P13KmI6VE59VICSJwTdOfWHa-u-h0fyB5-KXfB7hrNeQDfDboV6aDrdEeUPrTYpYBvxWqBGsxHk2lAp2ZPQT6J-eZfknCcj1Ce-s0T_-wLp81Gd7SIsouXirxvDIeH_zExRw5nFWkIOy_XZSXEoJQSuc7XJZktXqNXiG288_qkjsLhizsmmSks6NMk5ofN-vnlLPAEFTNNTkY6yJxde8dBgeS3CvwlTThhwBhPnUgDKwTuIjaZlByUfbD8DNvctk8aOz7CViPFdQ9YJQR4cJou8E0-9rUf4rNS4mfZq559lHQ8FMkIXhVjpwEUDnRhyo4_OHBAZbMV-ex-xQGDLoqICq8Wy1pyMmA70bHe4nSw9NvuwDjMCwaHVzGUhr1OS6XxG0u-cFRhbVusjpxdQzQDW.SDm1TW3r0Jsi1KSokZx8cu8yPhLRuyNrkpO6tfA9b2o&dib_tag=se&keywords=coder+proprement&qid=1741783925&sprefix=coder%2Caps%2C257&sr=8-1",
  },
];

const main = document.querySelector("main");

function createABookDiv(book) {
  // création div parente
  const newDiv = document.createElement("div");

  // création image
  const img = document.createElement("img");
  img.src = book.coverage;
  img.alt = `Couverture de ${book.name}`;
  img.classList.add("coverage");

  // création titre livre
  const title = document.createElement("h2");
  title.textContent = book.name;

  // création nom auteur
  const author = document.createElement("p");
  author.textContent = `Author : ${book.author}`;
  author.classList.add("author");

  // création date de parution
  const date = document.createElement("p");
  date.textContent = `Date of publication : ${book.publicationDate}`;
  date.classList.add("date");

  // création nombres de pages
  const pages = document.createElement("p");
  pages.textContent = `Number of pages : ${book.pages}`;
  pages.classList.add("pages");

  // création logo shop amazon
  const amazon = document.createElement("img");
  amazon.src = "assets/amazon.png";
  amazon.alt = "Logo amazon";
  amazon.classList.add("amazon-logo");

  // création lien shop amazon
  const amazonLink = document.createElement("a");
  amazonLink.setAttribute("href", book.amazon);
  amazonLink.setAttribute("target", "_blank");
  amazonLink.appendChild(amazon);
  amazonLink.classList.add("amazon-link");

  //création bouton suppr
  const supprButton = document.createElement("button");
  const supprImg = document.createElement("img");
  supprImg.src = "assets/fermer.png";
  supprImg.classList.add("suppr-img");
  supprButton.appendChild(supprImg);
  supprButton.classList.add("suppr-button");
  supprButton.addEventListener("click", (e) => {
    main.removeChild(newDiv);
  });

  // ajout de tout dans la div parente
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

//boucle sur tout les objets du tableau collection pour à chaque fois créer et ajouté une div
collection.forEach((book) => {
  main.appendChild(createABookDiv(book));
});

// A FINIR / RANGER

const select = document.getElementById("select-author");
const divContainer = document.querySelectorAll(".div-container");

const authorName = document.querySelectorAll("p.author");
const authors = [];

authorName.forEach((elem) =>
  authors.push(elem.textContent.replace("Author : ", ""))
);

// console.log(authors);
const setAuthor = new Set(authors);
// console.log(setAuthor);

const arrayAuthor = Array.from(setAuthor);

// console.log(arrayAuthor);

arrayAuthor.forEach((author) => {
  const option = document.createElement("option");
  option.textContent = author;
  option.value = author.toLowerCase();
  select.appendChild(option);
  //   console.log(option.value);
});

select.addEventListener("change", (e) => {
  divContainer.forEach((div) => {
    const name = div.querySelector(".author").textContent;
    const cleanName = name.replace("Author : ", "").toLowerCase();

    if (select.value === "all") {
      div.style.display = "grid";
    } else if (select.value !== cleanName) {
      div.style.display = "none";
    } else {
      div.style.display = "grid";
    }
  });
});
