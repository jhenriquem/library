import Request from "./API_Request";
import UI from "./UI";

export default class Search {
  static Container() {
    const btn = document.querySelector("#btn-add-book");
    const container = document.querySelector(".new-book-search-container");

    btn.addEventListener("click", () => {
      btn.className === "fa-solid fa-plus"
        ? container.show()
        : container.close();

      btn.className =
        btn.className === "fa-solid fa-plus"
          ? "fa-solid fa-close"
          : "fa-solid fa-plus";
    });
  }

  static search() {
    const input = document.querySelector(".input");
    const btn = document.querySelector("#btn-search-book");

    btn.addEventListener("click", () => {
      console.log(Request.Books(input.value));
    });
  }

  static INIT() {
    Search.Container();
    Search.search();
  }
}
