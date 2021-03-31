const questions = document.querySelectorAll(".single_question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question_btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show_text");
      }
    });

    question.classList.toggle("show_text");
  });
});
