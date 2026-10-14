async function Menu() {
  let menuSub = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  menuSub = res.Menu?.map((menu) => {
    return `<ul>
            <li>
                <a href="#">${menu.LiMenu}</a>
            </li>
          </ul>`;
  });
  document
    .querySelector("#navUl")
    .insertAdjacentHTML("beforeend", menuSub.join(" "));
}

async function ImageHeader() {
  let Img = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  Img = res.ImageHeader?.map((img) => {
    return `<a href=${img.href}>
            <img src=${img.SrcImgaeHeder} alt="image" />
          </a>`;
  });
  document
    .querySelector("#ImageDiv")
    .insertAdjacentHTML("beforeend", Img.join(" "));
}

async function loginandbuy() {
  let login = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  login = res.LoginBtn?.map((logs) => {
    return `<button class="login" id="loginAndbuy">
            <a href=${logs.hrefs}>${logs.title}</a>
          </button>`;
  });
  document.querySelector("#loginAndbuy").insertAdjacentHTML("beforeend",login.join(" "))
}
export { Menu, ImageHeader , loginandbuy };
