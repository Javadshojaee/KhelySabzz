async function SwipersLi() {
  let swipers = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  
  swipers = res.ImageSlider?.map((swip) => {
    return `<div class="swiper-slide">
              <a href=${swip.HrefSlide}>
                <img src=${swip.SrcSlider} alt="ImgeSwiper" />
              </a>
            </div>`;
  });
  document.querySelector("#swiper-Wrpper").insertAdjacentHTML("beforeend",swipers.join(" "))
}

export default SwipersLi
