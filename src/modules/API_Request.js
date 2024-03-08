import UI from "./UI";

export default class Request {
  static async books(value) {
    const APIkey = "AIzaSyDW_FQWo6mtRynJ6dUXxah7WednouKMllY";
    const list = [];

    UI.showLoading();
    try {
      const bookResponse = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${value}:keyes&key=${APIkey}`,
      );

      const data = await bookResponse.json();

      if (data.totalItems > 0) {
        data.items.forEach((book) => {
          list.push(book);
        });
      } else {
        list.push("Nenhum livro encontrado");
      }

      UI.hideLoading();
    } catch (error) {
      list.push("Não conseguimos pesquisa o seu livro, tente mais tarde");
    }

    return list;
  }
}
