import Library from "./Library";

export default class Storage {
  static getLibrary() {
    const storage = JSON.parse(localStorage.getItem("library"));
    const library = !storage ? new Library([]) : new Library(storage.bookcase);
    return library;
  }
}
