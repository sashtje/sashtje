/* keys for localStorage */
export const THEME_KEY = "sashtje_sashtje_mycv_theme";
export const LANG_KEY = "sashtje_sashtje_mycv_lang";

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
  LIGHT_RU: "светлая",
  DARK_RU: "тёмная",
};
export const LANG = { EN: "en", RU: "ru" };

export const metaThemeTag = document.querySelector('meta[name="theme-color"]');

export const LIGHT_THEME_TOP = "#ff0000";
export const DARK_THEME_TOP = "#022b41";

export const EMAIL_SUCCESS =
  "Your email was sent successfully. Thank you for your message :)";
export const EMAIL_SUCCESS_RU =
  "Ваше сообщение было отправлено. Спасибо, что написали мне :)";
export const EMAIL_FAIL =
  "Sorry, something went wrong :( your email wasn't sent. Please, try again or contact me any other way above.";
export const EMAIL_FAIL_RU =
  "Что-то пошло не так :( Пожалуйста, проверьте своё подключение к Интернету и попробуйте снова, или свяжитесь со мной любым другим способом.";

export const HREF_CV_EN = `${process.env.PUBLIC_URL}/cv/CV Aleksandra Rogova (Sashtje).txt`;
export const HREF_CV_RU = `${process.env.PUBLIC_URL}/cv/CV Александра Рогова (Sashtje).txt`;
