async function Right() {
  let Rig = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  Rig = res.RightFooter?.map((re) => {
    return `<img src=${re.RightSrc} alt="Images" />
          <h3>${re.H3Text}</h3>
          <p>${re.PFooter}</p>`;
  });
  document
    .querySelector("#RightFooter")
    .insertAdjacentHTML("beforeend", Rig.join(" "));
}

async function Left() {
  let lef = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  lef = res.LeftFooter?.map((Le) => {
    return `<a href="#">
              <img src=${Le.FootImg} alt="FooterImage" />
            </a>`;
  });
  document.querySelector("#botton").insertAdjacentHTML("beforeend",lef.join(" "))
}
export { Right , Left};
