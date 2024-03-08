window.addEventListener("DOMContentLoaded", function() {
  // Создайте объект с текстами для каждого языка
  const texts = {
    en: {
        name: "Juliana Svetlakova",
        startText: "Greetings! My name is ",
        scrollButton: "Scroll Down",
        switchBtn: "En",
        header: "About me",
        headProjects: "Projects",
        contacts: "Contacts",
        proj1: "KNIT - An online store mobile app made with Flutter",
        proj2: "BeeSmart - Android app",
        exp: "Work experience",
        desc1: "A startup to create software for blind people in the city of Kaliningrad",
        duration1: "Period of employment: ",
        time1: "February - March 2024 (One month of internship at the university)",
        instr1: "Technologies and tools used: ",
        resp1: "Responsibilities: ",
        respDesc1: "Implementation of neural networks for recognizing certain objects (in particular QR codes) in android application",
        res1: "Progress and Results: ",
        br11: "The possibility of creating a cross-platform application using Flutter, Kivy and BeeWare was tested at the beginning, but due to the complexity of cross-platform library importing it was decided to switch to native development",
        br12: "I first created an android application in Java using OpenCV, but it was decided to switch to TFlite because of the more modern and user-friendly implementation of my models",
        br13: "Created a project with Tflite with object recognition based on the initial example from the official documentation, tested a model created by a colleague, but because he did not follow the documentation of tflite for android, there were errors in its implementation in the application",
        br14: "My internship ended up being a great experience in working with a team in a startup, finding information and learning new technologies",
        edu: "Education",
        uni: "Baltic Federal University",
        grad: "Degree and major: ",
        gradDesc: "Bachelor's Degree - Applied Mathematics and Computer Science",
        timeGrad: "Learning Timeline: ",
        timeGradDesc: "2021-present (3rd year)",
        moreGrad: "Additional: ",
        moreGradDesc: "Training at Digital Cathedra, participation in a hackathon on machine learning from the bank",
        kvant: "CENTRE FOR TECHNICAL CREATIVITY \"Quantorium\"",
        direct: "Directions: ",
        directDesc: "WEB-development, Android-development",
        achieveKvant: "Achievements: ",
        achieveKvantDesc: "1st place in the All-Russian contest on frontend-development from HTML Academy",
        knit1: "I made this application as part of my summer internship at the university.",
        knit2: "I chose this app because my dorm roommate is a knitter, and I thought it would be interesting to try to make an online store for her stuff.",
        knit3: "Unfortunately, I didn't realize the full functionality with the ability to create profiles and store information. I've always had a hard time with the backend😅 But despite that, I still learned a lot and gained a lot of experience for myself, so in time, I hope to come to the full functionality.",
        knit4: "Through this project, I got a better understanding of Flutter, remembered Dart and the basics of mobile development, and practiced my UX and UI skills",
        bee1: "This is my very first mobile app that I ever made! I implemented it back in school in 11th grade in Quantorium.",
        bee2: "This application is a charades on the topic of physics. In this way you can test your knowledge of physical formulas and notations. That is when I was introduced to mobile development and the Java language.",   
        bee3: "A lot of things have been forgotten since then, but that's why I still keep this project on Github, because that way I can always look at my code and remember everything I did before.",
        bee4: "It was a bit complicated for the time, but quite interesting and unusual.",
        more: "More projects"
    },
    ru: {
        name: "Ульяна Светлакова",
        startText: "Привет, это ",
        scrollButton: "Вниз",
        switchBtn: "Ru",
        header: "Обо мне",
        headProjects: "Проекты",
        contacts: "Контакты",
        proj1: "KNIT - Мобильное приложение интернет-магазина с Flutter",
        proj2: "BeeSmart - Мобильное приложение для Android",
        exp: "Опыт работы",
        desc1: "Калининградский стартап по созданию ПО для слепых людей",
        duration1: "Период работы: ",
        time1: "Февраль - Март 2024г (Месяц в рамках производственной практики в ВУЗе)",
        instr1: "Используемые технологии и инструменты: ",
        resp1: "Обязанности: ",
        respDesc1: "Имплементация нейронных сетей для распознавания определенных объектов (в частности QR-кодов) в приложение для android",
        res1: "Ход и итоги: ",
        br11: "В начале была протестирована возможность создания кроссплатформенного приложения с помощью Flutter, Kivy и BeeWare, но из-за сложности кроссплатформенного импортирования библиотек был решен переход на нативную разработку",
        br12: "Сначала я создала android-приложение на Java с использованием OpenCV, но было решено перейти на TFlite из-за более современного и удобного внедрения своих моделей",
        br13: "Создан проект с Tflite с распознаванием объектов на основе начального примера из оф. документации, была протестирована модель созданная коллегой, но из-за того, что он не следовал документации tflite for android, возникли ошибки по её внедрению в приложение",
        br14: "В итоге моя практика закончилась и я получила большой опыт в работе с командой в стартапе, поиске информации и изучении новых технологий",
        edu: "Образование",
        uni: "БФУ им. И.Канта",
        grad: "Степень и специальность: ",
        gradDesc: "Бакалавриат - Прикладная математика и информатика",
        timeGrad: "Сроки обучения: ",
        timeGradDesc: "2021г - по настоящее время (3 курс)",
        moreGrad: "Дополнительно: ",
        moreGradDesc: "Обучение на Цифровых Кафедрах, участие в хакатоне по машинному обучению от банка",
        kvant: "КОГОАУ ДО Центр Технического Творчества \"Кванториум\"",
        direct: "Направления: ",
        directDesc: "WEB-разработка, Android-разработка",
        achieveKvant: "Достижения: ",
        achieveKvantDesc: "1 место в всероссийском конкурсе по frontend-разработке от HTML Academy",
        knit1: "Данное приложение я делала в рамках летней практики в ВУЗе.",
        knit2: "Я выбрала такое приложение потому что моя соседка по общежитию занимается вязанием, и я подумала что было бы интересно попробовать сделать интернет-магазин для ее вещей.",
        knit3: "К сожалению, я не реализовала полный функционал с возможностью создания профилей и хранения информации. Мне всегда тяжко довался бэкенд😅 Но несмотря на это, я всё равно многое изучила и получила большой опыт для себя, так что со временем, я надеюсь, приду к полному функционалу.",
        knit4: "Благодаря этому проекту я лучше разобралась во Flutter, вспомнила Dart и основы мобильной разработки, а также потренировала навыки UX и UI",
        bee1: "Это мое самое прервое мобильное приложение которое я когда-либо делала! Его я реализовывала еще в школе в 11 классе в Кванториуме.",
        bee2: "Данное приложение представляет собой шарады на тему физики. Таким образом вы можете проверить свои знания в физических формулах и обозначениях. Именно тогда я познакомилась с мобильной разработкой и языком Java.",   
        bee3: "Многое c тех времен уже забылось, но именно поэтому я до сих пор храню этот проект на Github, ведь таким образом я всегда могу посмотреть на свой код и вспомнить всё что делала раньше.",
        bee4: "Это было немного сложно для того времени, но довольно интересно и необычно.",
        more: "Больше проектов"
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

// Получаем все элементы с классом "close" (крестик)
var closeButtons = document.getElementsByClassName("close");

// Добавляем обработчик событий для каждого крестика
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
        // Находим родительский элемент модального окна и скрываем его
        var modal = this.parentElement.parentElement;
        modal.style.display = "none";
    });
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



