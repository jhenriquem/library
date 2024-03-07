export default class Request {
  static Books(value) {
    const APIkey = "AIzaSyDW_FQWo6mtRynJ6dUXxah7WednouKMllY";
    const list = [];

    async function search(titleSearched) {
      const book = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${titleSearched}:keyes&key=${APIkey}`,
      );

      try {
        const data = await book.json();

        data.items.forEach((book) => {
          list.push(book);
        });
      } catch {
        list.push("Nenhum livro encontrado");
      }
    }
    search(value);
    return list;
  }
}
