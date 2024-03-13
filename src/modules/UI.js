import Feactures from "./Feactures";
import Storage from "./Storage";

export default class UI {
  static closePop_Up() {
    const element = document.querySelector(".book-search-container");
    element.close();
    document.querySelector(".input").value = "";
    document.querySelector(".list-books-found").innerHTML = `
      <i class="fa-solid fa-spinner"></i>
    `;
  }

  static animateButtonOpenPop_Up() {
    const element = document.querySelector("#btn-open-search");

    if (element.classList.contains("open")) {
      element.style.transform = "rotate(45deg)";
      element.classList.remove("open");
    } else {
      element.style.transform = "rotate(90deg)";
      element.classList.add("open");
    }
  }

  static showLoading() {
    document.querySelector(".fa-spinner").style.display = "flex";
  }
  static hideLoading() {
    document.querySelector(".fa-spinner").style.display = "none";
  }

  static reloadBookCard(element) {
    element.innerText = element.innerText === "Ler" ? "Lido" : "Ler";
  }

  static grid() {
    const bookcase = Storage.getLibrary().getBookCase();
    const grid = document.querySelector(".books_grid");

    if (bookcase.length !== 0) {
      grid.innerHTML = "";
      bookcase.forEach((book) => {
        grid.appendChild(
          cardBook(
            book.title,
            book.bookID,
            book.status,
            book.coverLink,
            book.authors,
          ),
        );
      });
    } else {
      grid.innerHTML = `
      <article class="there-no-books">
        Não há livros na sua lista
        <img
          src="images/no-books-in-list.svg"
          class="img-there-no-books"
          alt="img there no books"
        />
      </article>
      `;
    }

    function cardBook(title, id, status, coverLink, authors) {
      const div = document.createElement("div");
      div.setAttribute("id", id);
      div.classList.add("card-books-grid");

      const img = document.createElement("img");

      img.setAttribute("src", !coverLink ? "images/no-page.png" : coverLink);

      img.setAttribute("alt", `Cover book ${title}`);

      const container = document.createElement("div");
      const block = document.createElement("div");

      const p = document.createElement("p");
      p.textContent = title;

      const legend = document.createElement("legend");
      if (authors) {
        authors.forEach((author) => (legend.innerHTML += ` <br> ${author}`));
      }
      const readingStatus = document.createElement("span");
      readingStatus.setAttribute("id", id);
      readingStatus.textContent = status ? "Lido" : "Ler";
      Feactures.changeStatusBook(readingStatus);

      const Remove = document.createElement("i");
      Remove.className = "fa-regular fa-trash-can";
      Remove.id = id;
      Feactures.removeBook(Remove);

      block.appendChild(readingStatus);
      block.appendChild(Remove);

      container.appendChild(p);
      container.appendChild(legend);
      container.appendChild(block);

      div.appendChild(img);
      div.appendChild(container);
      return div;
    }
  }
}
