window.addEventListener("DOMContentLoaded", function() {
  // Создайте объект с текстами для каждого языка
  const texts = {
    en: {
        name: "Juliana Svetlakova",
        startText: "Greetings! My name is ",
        scrollButton: "Scroll Down",
        switchBtn: "En",
        headProjects: "Projects",
    },
    ru: {
        name: "Ульяна Светлакова",
        startText: "Привет! Меня зовут ",
        scrollButton: "Вниз",
        switchBtn: "Ru",
        headProjects: "Проекты",
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


// Функция для открытия модального окна по его идентификатору
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Функция для закрытия модального окна по его идентификатору
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}


// Закрыть модальное окно при клике на крестик или вне его
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Добавляем обработчик события клика на блоки
var blocks = document.querySelectorAll('.block');
blocks.forEach(function(block) {
    block.addEventListener('click', function() {
        var modalId = block.getAttribute('data-modal');
        openModal(modalId);
    });
});


// Закрыть модальное окно при клике на Esc
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            modal.style.display = "none";
        });
    }
}


}
);



