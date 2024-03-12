import Request from "./API_Request";
import Book from "./Book";
import Storage from "./Storage";
import UI from "./UI";

export default class Feactures {
  static addBook(element) {
    element.addEventListener("click", () => {
      (async () => {
        const book = await Request.specificBook(element.id);
        const coverLink = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : "";

        Storage.getLibrary().add(
          new Book(
            book.volumeInfo.title,
            book.volumeInfo.authors,
            false,
            book.id,
            coverLink,
          ),
        );
        UI.closePop_Up();
        UI.animateButtonOpenPop_Up();
        UI.grid();
      })();
    });
  }
}
