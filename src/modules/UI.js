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
<<<<<<< HEAD
    } else {
      grid.innerHTML = `
      <article class="there-no-books">
        Não há livros na sua lista
        <img
          src="images/no-books-in-list.svg"
          class="img-there-no-books"
          alt=""
        />
      </article>

      `;
    }

=======
    }

>>>>>>> a5a535035268266415fe52a1e7de9f7cd537dd90
    function cardBook(title, id, status, coverLink, authors) {
      const div = document.createElement("div");
      div.setAttribute("id", id);
      div.classList.add("card-books-grid");

      const img = document.createElement("img");
      img.setAttribute("src", coverLink);

<<<<<<< HEAD
      const container = document.createElement("div");
=======
      const block = document.createElement("div");
>>>>>>> a5a535035268266415fe52a1e7de9f7cd537dd90

      const p = document.createElement("p");
      p.textContent = title;

      const legend = document.createElement("legend");
<<<<<<< HEAD
      if (authors) {
        authors.forEach((author) => (legend.innerHTML += ` <br> ${author}`));
      }
=======
      authors.forEach((author) => (legend.innerHTML += ` <br> ${author}`));
>>>>>>> a5a535035268266415fe52a1e7de9f7cd537dd90

      const readingStatus = document.createElement("span");
      readingStatus.setAttribute("id", id);
      readingStatus.textContent = status ? "Lido" : "Ler";
<<<<<<< HEAD
      Feactures.changeStatusBook(readingStatus);

      const Remove = document.createElement("i");
      Remove.className = "fa-regular fa-trash-can";
      Remove.id = id;
      Feactures.removeBook(Remove);

      const block = document.createElement("div");

      block.appendChild(readingStatus);
      block.appendChild(Remove);

      container.appendChild(p);
      container.appendChild(legend);
      container.appendChild(block);

      div.appendChild(img);
      div.appendChild(container);
=======

      block.appendChild(p);
      block.appendChild(legend);
      block.appendChild(readingStatus);

      div.appendChild(img);
      div.appendChild(block);
>>>>>>> a5a535035268266415fe52a1e7de9f7cd537dd90

      return div;
    }
  }
}
