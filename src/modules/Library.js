export default class Library {
  constructor(bookcase) {
    this.bookcase = bookcase;
  }

  getBook(id) {
    this.bookcase.forEach((item) => {
      if (item.id === id) {
        return item;
      }
    });
  }

  getBookCase() {
    return this.bookcase;
  }

  update() {
    localStorage.setItem("library", JSON.stringify(this));
  }

  add(object) {
    const verification = this.bookcase.find(
      (item) => item.bookID === object.bookID,
    );

    if (verification === undefined) {
      this.bookcase.push(object);
      this.update();
    }
  }

<<<<<<< HEAD
  changeStatus(id) {
    this.bookcase.forEach((item) => {
      if (item.bookID === id) {
        item.status = item.status ? false : true;
        this.update();
      }
    });
  }

  remove(id) {
    this.bookcase.forEach((item) => {
      if (item.bookID === id) {
        this.bookcase.splice(this.bookcase.indexOf(item), 1);
=======
  remove(id) {
    this.bookcase.forEach((item) => {
      if (item.id === id) {
        this.bookcase.split(this.bookcase.indexOf(item), 1);
>>>>>>> a5a535035268266415fe52a1e7de9f7cd537dd90
        this.update();
      }
    });
  }
}
