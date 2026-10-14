async function Book() {
  let books = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  books = res.BookSwiper?.map((book) => {
    return ` <div class="swiper-slide">
            <img src=${book.SRCiMAGES} alt="ImagesBooks" />
            <p>${book.PText}</p>
            <span>${book.SpanText}</span>
          </div>`;
  });
  document.querySelector("#SwiperBooks").insertAdjacentHTML("beforeend",books.join(" "))
}

export default Book