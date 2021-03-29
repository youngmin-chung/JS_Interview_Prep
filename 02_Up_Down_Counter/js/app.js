// set initial value to zero
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("down")) {
      count--;
    } else if (styles.contains("up")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "hsl(125, 67%, 44%)";
    }
    if (count < 0) {
      value.style.color = "hsl(360, 67%, 44%)";
    }
    if (count === 0) {
      value.style.color = "#000000";
    }
    value.textContent = count;
  });
});
