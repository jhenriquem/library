export default class UI {
  static loadResultSearch(list) {
    const listResult = document.querySelector(".list-books-found");
    list.forEach((item) => {
      djnfh;
      listResult.textContent += `
      <div>
        <img src="${item.volumeInfo.imageLinks.smallThumbnail}" alt="">
        <div>
          <p>${item.volumeInfo.title} : ${item.volumeInfo.subtitle}</p>
          <legend>${item.volumeInfo.authors[0]}</legend>
        </div>
      </div>`;
    });
  }
}
