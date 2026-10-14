let InptBox = document.querySelector("#search");
let Cover = "";
function CoverBox() {
  setTimeout(() => {
    InptBox.addEventListener(
      "click",
      function (e) {
        e.stopPropagation();
        if (!Cover) {
          Cover = document.createElement("div");
          Cover.classList.add("Cover");
          document.body.insertAdjacentElement("afterbegin", Cover);
        }
      },
      1000,
    );
  });
}

function RemoveCover() {
  document.addEventListener("click", function () {
    if (Cover) {
      Cover.remove();
      Cover = null;
    }
  });
}
export { CoverBox, RemoveCover };
