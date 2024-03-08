import Request from "./API_Request";
import UI from "./UI";

export default class Search {
  static Container() {
    const btn = document.querySelector("#btn-add-book");
    const container = document.querySelector(".new-book-search-container");

    btn.addEventListener("click", () => {
      btn.classList.contains("add")
        ? container.show()
        : UI.closePop_Up(container);
      UI.animateButtonOpenPop_Up(btn);
    });
  }

  static search() {
    const input = document.querySelector(".input");
    const btn = document.querySelector("#btn-search-book");

    btn.addEventListener("click", () => {
      (async () => {
        const booksList = await Request.books(input.value);
        UI.loadSearchResults(booksList);
      })();
    });
  }

  static INIT() {
    Search.Container();
    Search.search();
  }
}
