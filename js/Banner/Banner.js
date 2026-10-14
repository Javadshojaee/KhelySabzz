async function Banneres() {
  let Banners = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  Banners = res.Banner?.map((Ban) => {
    return `  <a href="#">
          <img src=${Ban.BannerSrc} alt="Banners">
        </a>`;
  });
  document.querySelector("#Banner").insertAdjacentHTML("beforeend",Banners.join(" "))
}
export default Banneres
