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
        this.update();
      }
    });
  }
}
