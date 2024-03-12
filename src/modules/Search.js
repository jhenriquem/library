import Request from "./API_Request";
import Feactures from "./Feactures";
import UI from "./UI";

export default class Search {
  static Container() {
    const btn = document.querySelector("#btn-open-search");
    const container = document.querySelector(".book-search-container");

    btn.addEventListener("click", () => {
      btn.classList.contains("open") ? container.show() : UI.closePop_Up();
      UI.animateButtonOpenPop_Up();
    });
  }

  static search() {
    const input = document.querySelector(".input");
    const btn = document.querySelector("#btn-search-book");

    btn.addEventListener("click", () => {
      (async () => {
        const booksList = await Request.books(input.value);
        Search.loadResults(booksList);
      })();
    });
  }

  static loadResults(list) {
    const listResult = document.querySelector(".list-books-found");
    listResult.innerHTML = `
      <i class="fa-solid fa-spinner"></i>
    `;

    if (list[0] === "Nenhum livro encontrado") {
      listResult.innerHTML = `     
      <i class="fa-solid fa-spinner"></i>
      Nenhum livro encontrado
      <img  id='not-found-img'src='images/not-found.svg' >
      `;
      return;
    } else {
      try {
        list.forEach((book) => {
          try {
            const title = book.volumeInfo.title;
            const id = book.id;
            const authors = book.volumeInfo.authors
              ? book.volumeInfo.authors
              : [""];
            const coverLink = book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : "";

            listResult.appendChild(booksCard(title, id, authors, coverLink));
          } catch {
            return;
          }
        });
      } catch {
        listResult.innerHTML = `  
      <i class="fa-solid fa-spinner"></i>
          Não estamos conseguindo pesquisar o seu livro, tente mais tarde
          <img id='erro-img' src='images/erro.svg' >
        `;
      }
    }

    function booksCard(title, id, authors, coverLink) {
      const div = document.createElement("div");
      div.setAttribute("id", id);
      div.classList.add("research-books-card");
      Feactures.addBook(div);

      const img = document.createElement("img");
      img.setAttribute("src", coverLink);

      const block = document.createElement("div");

      const p = document.createElement("p");
      p.textContent = title;

      const legend = document.createElement("legend");
      authors.forEach((author) => (legend.innerHTML += ` <br> ${author}`));

      block.appendChild(p);
      block.appendChild(legend);

      div.appendChild(img);
      div.appendChild(block);

      return div;
    }
  }

  static INIT() {
    Search.Container();
    Search.search();
  }
}
