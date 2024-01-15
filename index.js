btn = document.getElementsByClassName("no");

btn[0].addEventListener("mouseover", function () {
  (this.style.top = Math.random() * 500 + "px"),
    (this.style.left = Math.random() * 1000 + "px");
});
