"use strict";

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const mins = document.querySelector(".mins");
const sec = document.querySelector(".sec");

window.addEventListener("load", function () {
  for (let i = 0; i <= 60; i++) {
    sec.innerHTML = i;
  }
});
