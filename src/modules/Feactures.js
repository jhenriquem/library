import Request from "./API_Request";
import UI from "./UI";

export default class Feactures {
  static addNewBookOfList(element) {
    element.addEventListener("click", () => {
      (async () => {
        const book = await Request.specificBook(element.id);
        UI.openPreviewBook(book);
      })();
    });
  }
}
