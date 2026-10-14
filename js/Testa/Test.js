async function Test() {
  let tests = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();

  tests = res.Advertisement?.map((tes) => {
    return `<div class="Card">
          <img src=${tes.TestSrc} alt="Test">
        </div>`;
  });
  document
    .querySelector("#Advertisement")
    .insertAdjacentHTML("beforeend", tests.join(" "));
}

export default Test;
