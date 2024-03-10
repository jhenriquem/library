import Feactures from "./Feactures";

export default class UI {
  static loadSearchResults(list) {
    const listResult = document.querySelector(".list-books-found");
    listResult.innerHTML = `
      <i class="fa-solid fa-spinner"></i>
    `;

    if (list[0] === "Nenhum livro encontrado") {
      listResult.innerHTML = `     
      <i class="fa-solid fa-spinner"></i>
      Nenhum livro encontrado
      `;
      return;
    } else {
      try {
        list.forEach((book) => {
          try {
            const title = book.volumeInfo.title;
            const id = book.id;
            const authors =
              book.volumeInfo.authors !== undefined
                ? book.volumeInfo.authors
                : [""];
            const converLink =
              book.volumeInfo.imageLinks !== undefined
                ? book.volumeInfo.imageLinks.thumbnail
                : "";

            listResult.appendChild(
              UI.researchBooksCard(title, id, authors, converLink),
            );
          } catch {
            return;
          }
        });
      } catch {
        listResult.innerHTML = `  
      <i class="fa-solid fa-spinner"></i>
          Não estamos conseguindo pesquisar o seu livro, tente mais tarde
        `;
      }
    }
  }

  static researchBooksCard(title, id, authors, coverLink) {
    const div = document.createElement("div");
    div.setAttribute("id", id);
    div.classList.add("research-books-card");
    Feactures.addNewBookOfList(div);

    const img = document.createElement("img");
    img.setAttribute("src", coverLink);

    const block = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = title;

    const legend = document.createElement("legend");
    authors.forEach((author) => (legend.innerHTML += ` <br> ${author}`));

    block.appendChild(p);
    block.appendChild(legend);

    div.appendChild(img);
    div.appendChild(block);

    return div;
  }

  static closePop_Up(element) {
    element.close();
    document.querySelector(".input").value = "";
    document.querySelector(".list-books-found").innerHTML = `
      <i class="fa-solid fa-spinner"></i>
    `;
  }

  static animateButtonOpenPop_Up(element) {
    if (element.classList.contains("add")) {
      element.style.transform = "rotate(45deg)";
      element.classList.remove("add");
    } else {
      element.style.transform = "rotate(90deg)";
      element.classList.add("add");
    }
  }

  static showLoading() {
    document.querySelector(".fa-spinner").style.display = "flex";
  }
  static hideLoading() {
    document.querySelector(".fa-spinner").style.display = "none";
  }

  static loadDataInPreview(object) {
    const title = document.querySelector("#title_preview-book");
    const cover = document.querySelector("#img_preview-book");
    const subtitle = document.querySelector("#subtitle_preview-book");
    const pageCount = document.querySelector("#pageCount_preview-book");
    const authors = document.querySelector("#authors_preview-book");
    const description = document.querySelector("#description_preview-book");
  }

  static openPreviewBook() {
    const preview = document.querySelector(".preview-book");

    preview.show();
  }
}
