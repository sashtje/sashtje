import CustomLink from "../components/CustomLink";

import theWatchImg from "../assets/images/projects/the-watch.webp";

import timerCatImg from "../assets/images/projects/timer-cat-light.webp";

import birthdayCardImg from "../assets/images/projects/birthday-card.webp";

import rsLangImg from "../assets/images/projects/rs-lang.webp";

import rsReactImg from "../assets/images/projects/rs-react.webp";

import rsCvImg from "../assets/images/projects/rs-cv.webp";

import rsMuseumImg from "../assets/images/projects/rs-museum.webp";

import rsMomentumImg from "../assets/images/projects/rs-momentum.webp";

import rsArtQuizImg from "../assets/images/projects/rs-art-quiz.webp";

import rsNewsPortalImg from "../assets/images/projects/rs-news-portal.webp";

import rsChristmasImg from "../assets/images/projects/rs-christmas-task.webp";

import rsAsyncRaceImg from "../assets/images/projects/rs-async-race.webp";

import rsCssMemSliderImg from "../assets/images/projects/rs-css-mem-slider.webp";

import rsPresentationSVGImg from "../assets/images/projects/rs-presentation-svg.webp";

import bicycleLandingPageImg from "../assets/images/projects/bicycle-landing-page.webp";

import cocktailsLandingPageImg from "../assets/images/projects/cocktails.webp";

import lionInDesertImg from "../assets/images/projects/lion-in-desert.webp";

import surveyFormImg from "../assets/images/projects/survey-form.webp";

import musicWorldImg from "../assets/images/projects/music-world.webp";

import techDocImg from "../assets/images/projects/tech-doc.webp";

import tributePageImg from "../assets/images/projects/tribute-page.webp";

import fakePortfolioImg from "../assets/images/projects/fake-portfolio.webp";

import travelSiteImg from "../assets/images/projects/travel-site.webp";

const theWatch = {
  title: "The watch",
  image: theWatchImg,
  transition: "background-position 9s linear, outline 0.3s",
  deployLink: "https://aleksawebdev.github.io/The-watch/",
  codeLink: "https://github.com/AleksaWebDev/The-watch",
  tags: ["html", "css", "bem", "js", "jquery", "3D"],
  description: [
    <>
      The Golden watch is my idea from design to implementation. The watch can
      be opened by clicking on the lid and closed by clicking on the button that
      appears when the watch opens. For the lid rotation was used 3D
      transformation. The watch shows the time with the three hands, and also
      displays the current date. There is a function to turn on the sound. The
      watch is drawn with only html and css, responsive.
    </>,
  ],
  descriptionRu: [
    <>
      Золотые часы — моя идея от дизайна до воплощения. Часы можно открыть,
      нажав на крышку, и закрыть, нажав на кнопку, которая появляется, когда
      часы открываются. Для вращения крышки использовалась 3D трансформация.
      Часы показывают время тремя стрелками, а также отображает текущую дату.
      Есть функция включения звука. Часы нарисованы с помощью html и css,
      отзывчивый дизайн.
    </>,
  ],
};

const timerCat = {
  title: "Timer cat",
  image: timerCatImg,
  transition: "background-position 9s linear, outline 0.3s",
  deployLink: "https://aleksawebdev.github.io/timer-cat/",
  codeLink: "https://github.com/AleksaWebDev/timer-cat",
  tags: ["html", "css", "bem", "js"],
  description: [
    <>
      Timer cat is also my idea from design to implementation. There are two
      mode: light and dark. When the user closes the tab, the timer remembers
      which mode was turned on last and, when reopened, immediately switches the
      mode to the last state. The cat's eyes can follow the cursor and blink,
      cat sleeps when the timer is on and meows when the time is over. Timer is
      drawn with only html and css, responsive.
    </>,
  ],
  descriptionRu: [
    <>
      Кошка-таймер — тоже моя идея от дизайна до реализации. Есть два режима:
      светлый и тёмный. Когда пользователь закрывает вкладку, таймер запоминает
      какой режим был включен последним и при повторном открытии сразу включает
      последний выбранный режим. Глаза кошки могут следить за курсором и
      моргать, кошка спит, когда таймер включен, и мяукает, когда время истекло.
      Таймер нарисован только с помощью html и css, отзывчивый дизайн.
    </>,
  ],
};

const birthdayCard = {
  title: "Birthday card",
  image: birthdayCardImg,
  transition: "background-position 5s linear, outline 0.3s",
  deployLink: "https://aleksawebdev.github.io/Axel-birthday-card/",
  codeLink: "https://github.com/AleksaWebDev/Axel-birthday-card",
  tags: ["html", "css", "js"],
  description: [
    <>
      Birthday card was made for my Belgian friend. The site is made in Dutch,
      you can turn on congratulatory music and a song. There are some simple
      animations. Responsive.
    </>,
  ],
  descriptionRu: [
    <>
      Открытка на День Рождения была сделана для моего бельгийского друга. Сайт
      сделан на нидерландском языке, можно включить поздравительную музыку и
      песню. Есть несколько простых анимаций. Отзывчивый дизайн.
    </>,
  ],
};

const rsLang = {
  title: "RsLang",
  image: rsLangImg,
  transition: "background-position 2s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rslang/",
  codeLink: "https://github.com/sashtje/rslang",
  tags: ["react", "scss", "rest-api", "auth", "amcharts"],
  description: [
    <>
      RsLang - the app for learning English. It was a command task from
      RsSchool, where I was a Team Lead. The application consists of the
      following main parts: main page, auth, textbook, 2 games, statistics and
      page about us. To learn more details click on the button with code to go
      to my GitHub.
    </>,
  ],
  descriptionRu: [
    <>
      RsLang - приложение для изучения английского языка. Это была командная
      задача от RsSchool, где я была тимлидом. Приложение состоит из следующих
      основных частей: главная страница, авторизация, учебник, 2 игры,
      статистика и страница о нас. Чтобы узнать подробнее нажмите на кнопку с
      кодом для перехода на мой GitHub.
    </>,
  ],
};

const rsReact = {
  title: "RsReact",
  image: rsReactImg,
  transition: "background-position 5s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rsschool-react/",
  codeLink: "https://github.com/sashtje/rsschool-react",
  tags: [
    "react",
    "redux",
    "redux thunk",
    "redux toolkit",
    "ts",
    "jest",
    "rtl",
    "flickr api",
    "react icons",
    "react hook form",
    "locationIq api",
  ],
  description: [
    <>
      Several tasks from React RsSchool course. During the course, managed and
      unmanaged components were studied, class and functional components, work
      with forms, portals, redux, tests were written using Jest and React
      Testing Library. Also I used Flickr and LocationIq to get the place where
      the photo was taken on base latitude and longitude coordinates given from
      Flickr Api.
    </>,
  ],
  descriptionRu: [
    <>
      Несколько задач из курса React RsSchool. В ходе курса были изучены
      управляемые и неуправляемые компоненты, классовые и функциональные
      компоненты, работа с формами, порталами, Redux, тесты писались с
      использованием Jest и React Testing Library. Также я использовала
      LocationIq, чтобы найти место, где была сделана фотография по базовым
      координатам широты и долготы, полученным из Flickr Api.
    </>,
  ],
};

const rsCv = {
  title: "RsCv",
  image: rsCvImg,
  transition: "background-position 14s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rsschool-cv/",
  codeLink: "https://github.com/sashtje/rsschool-cv",
  tags: ["markdown", "html", "css", "js"],
  description: [
    <>
      CV as a study project from RsSchool. When you click on a photo, another
      one appears. When the page loads, the logo, moon, and menu or burger menu
      buttons will animate.
    </>,
  ],
  descriptionRu: [
    <>
      CV как учебный проект от RsSchool. Если нажать на фотографию, она
      повернётся и откроет вторую. Используется анимация для появления логотипа,
      луны и кнопок меню (или бургер-меню).
    </>,
  ],
};

const rsMuseum = {
  title: "RsMuseum",
  image: rsMuseumImg,
  transition: "background-position 7s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rsschool/museum-dom/",
  codeLink: "https://github.com/sashtje/rsschool",
  tags: [
    "html",
    "scss",
    "js",
    "slick slider",
    "custom video player",
    "mapbox",
    "youtube api",
  ],
  description: [
    <>
      Analogue of the Louvre website. It was a task from RsSchool in 3 parts.
      The site is adapted, a different look for different resolutions.
    </>,
  ],
  descriptionRu: [
    <>
      Аналог сайта Лувра. Это было задание от RsSchool в 3-х частях. Сайт
      адаптирован, разный вид для разных разрешений.
    </>,
  ],
};

const rsMomentum = {
  title: "RsMomentum",
  image: rsMomentumImg,
  transition: "background-position 9s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rsschool/momentum/",
  codeLink: "https://github.com/sashtje/rsschool",
  tags: [
    "html",
    "scss",
    "js",
    "custom audio player",
    "openWeatherMap api",
    "unsplash api",
    "flickr api",
  ],
  description: [
    <>
      Analogue of the extension of the same name for Chrome. The site shows the
      date, time, a wish for a good time of the day, a custom audio player,
      allows you to enter a name and remembers it. Also shows the weather,
      quotes (can be changed). There are buttons for sliding background photos.
      In the settings, you can select the language of the site, the source of
      photos: a repository from Github, Flickr or Unsplash, and you can also
      remove or add all these widgets.
    </>,
  ],
  descriptionRu: [
    <>
      Аналог одноимённого расширения для Chrome. На сайте представлены: дата,
      время, пожелание доброго времени суток, аудиоплеер. Сайт позволяет ввести
      имя и запоминает его. Также показывает погоду и цитату дня (можно менять).
      Есть возможность перелистывать фоновые фотографии. В настройках можно
      выбрать язык сайта, источник фотографий: репозиторий с GitHub, Flickr или
      Unsplash, а также можно управлять отображением всех этих виджетов на
      странице.
    </>,
  ],
};

const rsArtQuiz = {
  title: "RsArtQuiz",
  image: rsArtQuizImg,
  transition: "background-position 4s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rsschool/art-quiz/",
  codeLink: "https://github.com/sashtje/rsschool",
  tags: ["html", "scss", "js", "webpack", "spa"],
  description: [
    <>
      A guessing game (SPA). It's a task from RsSchool. You need to guess either
      the artist from the picture, or the picture from the artist. If you play
      in one of the categories, an icon with the number of correct answers will
      appear on the category card at the end. When you click on this icon, a
      page with results will open, where you can see detailed information on the
      paintings (if you click on them) and open a painting on the full screen or
      download it to your computer.
    </>,
  ],
  descriptionRu: [
    <>
      Викторина (SPA). Это задание от RsSchool. В ходе игры нужно либо угадать
      художника по картине, либо картину по художнику. Если вы разыграете одну
      из категорий, после завершения игры появится иконка с количеством
      правильных ответов. При нажатии на эту иконку откроется страница с
      результатами, где можно увидеть подробную информацию о картинах этой
      категории (если на них нажать). Также можно будет открыть картину на весь
      экран или скачать её на свой компьютер.
    </>,
  ],
};

const rsNewsPortal = {
  title: "RsNewsPortal",
  image: rsNewsPortalImg,
  transition: "background-position 4s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rsschool/migration-newip-to-ts/",
  codeLink: "https://github.com/sashtje/rsschool",
  tags: ["html", "scss", "ts", "webpack"],
  description: [
    <>
      Task from RsSchool. An existing application was needed to be migrated from
      vanilla JavaScript to TypeScript and make its appearance better and
      adaptive. I added a menu with letters for a more compact and convenient
      selection of news.
    </>,
  ],
  descriptionRu: [
    <>
      Задание от RsSchool. Существующее приложение необходимо было мигрировать с
      ванильного JavaScript в TypeScript и сделать его внешний вид приятнее и
      адаптировать. Для улучшения внешнего вида, более компактного и удобного
      поиска новостей я добавила меню с буквами алфавита.
    </>,
  ],
};

const rsChristmasTask = {
  title: "Christmas task",
  image: rsChristmasImg,
  transition: "background-position 9s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rsschool/christmas-task/",
  codeLink: "https://github.com/sashtje/rsschool",
  tags: [
    "html",
    "scss",
    "ts",
    "webpack",
    "noUiSlider",
    "spa",
    "drag&drop",
    "image map generator",
  ],
  description: [
    <>
      It was a task from RsSchool. This app consists of 3 pages: home page, page
      with toys and page with Christmas tree. On the page with toys, you can
      select and sort toys with which you will then decorate the Christmas tree.
      On the tree page, you can choose a tree, background, garland, turn on
      Christmas music, snow. And you can also hang balls on the Christmas tree
      and take them off. The application is adapted from 768px and more and was
      developed for the latest version of Chrome.
    </>,
  ],
  descriptionRu: [
    <>
      Задание от RsSchool. Это приложение состоит из 3 страниц: домашняя
      страница, страница с игрушками и страница с ёлкой. На странице с игрушками
      вы можете выбирать и сортировать игрушки, которыми потом будете украшать
      ёлку. На странице с ёлкой можно выбрать: тип ёлки, фон, гирлянду, включить
      Рождественскую музыку, снег. А ещё можно повесить шарики на ёлку и снять
      их. Приложение адаптировано от 768px в ширину и выше, и было разработано
      для последней версии Chrome.
    </>,
  ],
};

const rsAsyncRace = {
  title: "RsAsyncRace",
  image: rsAsyncRaceImg,
  transition: "background-position 1s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/rsschool/async-race/",
  codeLink: "https://github.com/sashtje/rsschool",
  tags: ["scss", "ts", "webpack", "api", "spa"],
  description: [
    <>
      Working with asynchronous requests and api. To use this app you will need
      before to start the{" "}
      <CustomLink href="https://github.com/sashtje/async-race-api">
        server
      </CustomLink>{" "}
      locally. The app consists of two pages: the garage and the winners. On the
      garage page, you can create cars, modify, delete. You can start the engine
      of one car or start a race. You can also switch pages with cars if there
      are more than 7 cars. The cars that win the race are added to the winners
      page. The winners can be sorted in the table.
    </>,
  ],
  descriptionRu: [
    <>
      Гонки. Работа с асинхронными запросами и API. Прежде чем использовать это
      приложение Вам понадобится запустить{" "}
      <CustomLink href="https://github.com/sashtje/async-race-api">
        {" "}
        сервер
      </CustomLink>{" "}
      локально. Приложение состоит из двух страниц: гараж и победители. На
      странице гаража вы можете создавать автомобили, изменять их и удалять.
      Также Вы можете запустить двигатель одной машины или начать гонку. Есть
      возможность листать страницы гаража с машинами и запускать гонку на любой
      их этих страниц. Машины, выигравшие гонку, добавляются в таблицу
      победителей. Победителей можно сортировать при клике на шапку таблицы.
    </>,
  ],
};

const rsCssMemSlider = {
  title: "Rs Css Mem Slider",
  image: rsCssMemSliderImg,
  transition: "background-position 4s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/cssMemSlider/cssMemSlider/",
  codeLink: "https://github.com/sashtje/cssMemSlider",
  tags: ["html", "css"],
  description: [
    <>
      Slider with animated switching of pictures and captions to them. The task
      was to make a slider without using JavaScript.
    </>,
  ],
  descriptionRu: [
    <>
      Слайдер с анимированным переключением картинок и подписей к ним. Задание
      заключалось в том, чтобы сделать слайдер без использования JavaScript.
    </>,
  ],
};

const rsPresentationSVG = {
  title: "Rs Presentation SVG",
  image: rsPresentationSVGImg,
  transition: "background-position 4s linear, outline 0.3s",
  deployLink: "https://sashtje.github.io/presentation-svg/",
  codeLink: "https://github.com/sashtje/presentation-svg",
  tags: ["reveal.js"],
  description: [
    <>
      It was a task from RsSchool. I made a presentation "SVG: Modes,
      Coordinates, Basic shapes, Accessibility, Animations" in English and
      recorded a video with my performance in English.
    </>,
  ],
  descriptionRu: [
    <>
      Презентация на английском, задание от RsSchool. Я сделала презентацию
      "SVG: Режимы, Координаты, Базовые фигуры, Доступность, Анимация» на
      английском и записал видео с моим выступлением на английском языке.
    </>,
  ],
};

const bicycleLandingPage = {
  title: "Bicycle landing page",
  image: bicycleLandingPageImg,
  transition: "background-position 6s linear, outline 0.3s",
  deployLink: "https://aleksawebdev.github.io/bicycle-landing-page/",
  codeLink: "https://github.com/AleksaWebDev/bicycle-landing-page",
  tags: ["html", "css", "scss", "bem", "js"],
  description: [
    <>Landing page. Just a training layout. Responsive with burger menu.</>,
  ],
  descriptionRu: [
    <>
      Целевая страница. Просто тренировочный макет для вёрстки. Отзывчивый
      дизайн с гамбургер-меню.
    </>,
  ],
};

const cocktails = {
  title: "Cocktails landing page",
  image: cocktailsLandingPageImg,
  transition: "background-position 3s linear, outline 0.3s",
  deployLink: "https://aleksawebdev.github.io/cocktails/",
  codeLink: "https://github.com/AleksaWebDev/cocktails",
  tags: ["html", "css", "js"],
  description: [
    <>
      Landing page. Just a training layout with sliders and the ability to
      upload a photo. Responsive.
    </>,
  ],
  descriptionRu: [
    <>
      Целевая страница. Просто обучающий макет со слайдерами и возможностью
      загрузить фото. Отзывчивый дизайн.
    </>,
  ],
};

const lionInDesert = {
  title: "A lion in the desert",
  image: lionInDesertImg,
  transition: "background-position 0.5s linear, outline 0.3s",
  deployLink: "https://codepen.io/sashtje/full/KKgpKPw",
  codeLink: "https://codepen.io/sashtje/pen/KKgpKPw",
  tags: ["html", "css"],
  description: [<>Landing page. Just a simple training layout. Responsive.</>],
  descriptionRu: [<>Целевая страница. Тренировочный макет. Адаптированный.</>],
};

const surveyForm = {
  title: "Survey form",
  image: surveyFormImg,
  transition: "background-position 1.5s linear, outline 0.3s",
  deployLink: "https://codepen.io/sashtje/full/eYZzdZE",
  codeLink: "https://codepen.io/sashtje/pen/eYZzdZE",
  tags: ["html", "css"],
  description: [
    <>
      My work for freecodecamp site to get "Responsive Web Design" certificate.
    </>,
  ],
  descriptionRu: [
    <>
      Моя работа для курса с сайта freecodecamp для получения сертификата
      "Отзывчивый веб-дизайн".
    </>,
  ],
};

const musicWorld = {
  title: "Music World",
  image: musicWorldImg,
  transition: "background-position 1.5s linear, outline 0.3s",
  deployLink: "https://codepen.io/sashtje/full/wvGJevz",
  codeLink: "https://codepen.io/sashtje/pen/wvGJevz",
  tags: ["html", "css"],
  description: [
    <>
      My work for freecodecamp site to get "Responsive Web Design" certificate.
    </>,
  ],
  descriptionRu: [
    <>
      Моя работа для курса с сайта freecodecamp для получения сертификата
      "Отзывчивый веб-дизайн".
    </>,
  ],
};

const techDoc = {
  title: "Tech documentation",
  image: techDocImg,
  transition: "background-position 9s linear, outline 0.3s",
  deployLink: "https://codepen.io/sashtje/full/xxVrQQy",
  codeLink: "https://codepen.io/sashtje/pen/xxVrQQy",
  tags: ["html", "css"],
  description: [
    <>
      My work for freecodecamp site to get "Responsive Web Design" certificate.
    </>,
  ],
  descriptionRu: [
    <>
      Моя работа для курса с сайта freecodecamp для получения сертификата
      "Отзывчивый веб-дизайн".
    </>,
  ],
};

const tributePage = {
  title: "Tribute page",
  image: tributePageImg,
  transition: "background-position 2s linear, outline 0.3s",
  deployLink: "https://codepen.io/sashtje/full/vYGGdqW",
  codeLink: "https://codepen.io/sashtje/pen/vYGGdqW",
  tags: ["html", "css"],
  description: [
    <>
      My work for freecodecamp site to get "Responsive Web Design" certificate.
    </>,
  ],
  descriptionRu: [
    <>
      Моя работа для курса с сайта freecodecamp для получения сертификата
      "Отзывчивый веб-дизайн".
    </>,
  ],
};

const fakePortfolio = {
  title: "Fake portfolio",
  image: fakePortfolioImg,
  transition: "background-position 3s linear, outline 0.3s",
  deployLink: "https://codepen.io/sashtje/full/MWyrdOG",
  codeLink: "https://codepen.io/sashtje/pen/MWyrdOG",
  tags: ["html", "css"],
  description: [
    <>
      My work for freecodecamp site to get "Responsive Web Design" certificate.
    </>,
  ],
  descriptionRu: [
    <>
      Моя работа для курса с сайта freecodecamp для получения сертификата
      "Отзывчивый веб-дизайн".
    </>,
  ],
};

const travelSite = {
  title: "Travel site",
  image: travelSiteImg,
  transition: "background-position 20s linear, outline 0.3s",
  deployLink: "https://aleksawebdev.github.io/travel-project/",
  codeLink: "https://github.com/AleksaWebDev/travel-project",
  tags: ["html", "css"],
  description: [<>Landing page. Just a simple training layout. Responsive.</>],
  descriptionRu: [
    <>Целевая страница. Простой тренировочный макет. Отзывчивый дизайн.</>,
  ],
};

const projects = [
  theWatch,
  timerCat,
  rsReact,
  rsLang,
  birthdayCard,
  rsNewsPortal,
  rsCv,
  rsMuseum,
  rsMomentum,
  rsArtQuiz,
  rsChristmasTask,
  rsAsyncRace,
  rsCssMemSlider,
  rsPresentationSVG,
  bicycleLandingPage,
  cocktails,
  lionInDesert,
  surveyForm,
  musicWorld,
  techDoc,
  tributePage,
  fakePortfolio,
  travelSite,
];

export default projects;
