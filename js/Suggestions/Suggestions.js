async function Suggestions() {
  let Sugges = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  Sugges = res.Suggestions?.map((Sug) => {
    return `<div class="swiper-slide">
            <img src=${Sug.SuggestionsSrc} alt="ImagesBooks" />
            <p>${Sug.Descriptiun}</p>
            <h6>${Sug.OldPrice}</h6>
            <span>${Sug.Price}</span>
          </div>`;
  });
  document.querySelector("#SuggestionsSwiper").insertAdjacentHTML("beforeend",Sugges.join(" "))
}
export default Suggestions