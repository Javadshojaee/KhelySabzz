async function NoteBooks() {
  let Notes = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  Notes = res.NoteBook?.map((not) => {
    return ` <div class="swiper-slide">
            <img src=${not.NoteSrc} alt="ImagesBooks" />
            <p>${not.Ntext}</p>
            <span>${not.NotePrice}</span>
          </div>`;
  });
  document.querySelector("#NotesBoooks").insertAdjacentHTML("beforeend",Notes)
}
export default NoteBooks
