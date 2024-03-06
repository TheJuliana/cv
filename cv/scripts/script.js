window.addEventListener("DOMContentLoaded", function() {
  // Создайте объект с текстами для каждого языка
  const texts = {
    en: {
        header: "Juliana Svetlakova",
        startText: "This is some English text.",
        scrollButton: "Scroll Down",
        switchBtn: "En"
    },
    ru: {
        header: "Ульяна Светлакова",
        startText: "Это некоторый текст на русском языке.",
        scrollButton: "Вниз",
        switchBtn: "Ru"
    }
};

// Установите начальный язык
let currentLanguage = "ru";

// Функция для изменения языка
function toggleLanguage() {
    // Если текущий язык английский, переключаем на русский, и наоборот
    currentLanguage = currentLanguage === "en" ? "ru" : "en";
    // Обновляем тексты на странице
    updateTexts();
}

// Функция для обновления текстов на странице
function updateTexts() {
    const elements = document.querySelectorAll('[data-language]');
    elements.forEach(element => {
        const key = element.getAttribute('data-language');
        element.textContent = texts[currentLanguage][key];
    });
}

// Добавляем обработчик события для кнопки
const languageButton = document.getElementById("languageButton");
languageButton.addEventListener("click", toggleLanguage);

// Инициализация текстов при загрузке страницы
document.addEventListener("DOMContentLoaded", updateTexts);


  var header = document.getElementById("myHeader");
  var footer = document.getElementById("footer");
  var sticky = header.offsetTop;
  var stick = footer.offsetTop;

  window.onscroll = function() {
      myFunction();
  };

  function myFunction() {
      if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          footer.classList.add("stick");
      } else {
          header.classList.remove("sticky");
          footer.classList.remove("stick");
      }
  }

  // Находим кнопку по ее идентификатору
var scrollButton = document.getElementById("scrollButton");

// Добавляем обработчик события клика на кнопку
scrollButton.addEventListener("click", scrollToContent);

// Функция для прокрутки содержимого при клике на кнопку
function scrollToContent() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

});
