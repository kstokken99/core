import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t, i18n } = useTranslation("main");
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div>
      {t("MainPage")}
      <button onClick={toggleLang}>{t("Toggle")}</button>
    </div>
  );
};

export default MainPage;
