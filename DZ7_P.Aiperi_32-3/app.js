function toggleAnswer(answerId) {
      var answerElement = document.getElementById(answerId);
      var buttonElement = answerElement.previousElementSibling;

      if (answerElement.style.display === 'none' || answerElement.style.display === '') {
        answerElement.style.display = 'block';
        buttonElement.textContent = 'Скрыть ответ';
      } else {
        answerElement.style.display = 'none';
        buttonElement.textContent = 'Показать ответ';
      }
}
  