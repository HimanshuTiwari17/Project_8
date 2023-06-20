document.addEventListener("DOMContentLoaded", function () {
  var mainJokeEl = document.getElementById("main_joke");
  var headingEl = document.getElementById("heading");
  var buttonEl = document.getElementById("btn");
  var buttonConEl = document.querySelector(".butn");
  var con1El = document.querySelector(".con1");
  var con2El = document.querySelector(".con2");
  var con3El = document.querySelector(".con3");
  var emotion = "";

  con1El.addEventListener("click", function () {
    var text = con1El.querySelector("#text");
    con1El.classList.add("active");
    if (text) {
      emotion = text.innerText;
    }
  });

  con2El.addEventListener("click", function () {
    var text = con2El.querySelector("#text");
    con2El.classList.add("active");
    if (text) {
      emotion = text.innerText;
    }
  });

  con3El.addEventListener("click", function () {
    var text = con3El.querySelector("#text");
    con3El.classList.add("active");

    if (text) {
      emotion = text.innerText;
    }
  });

  buttonEl.addEventListener("click", display);

  function display() {
    headingEl.innerText = "Thank You";
    mainJokeEl.innerHTML = `${emotion}`;

    buttonConEl.innerHTML =
      "We'll use your feedback to improve our customer support.";
    buttonConEl.style.padding = "10px";
    buttonConEl.style.textAlign = "center";
  }
});
