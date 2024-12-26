import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();
  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <select onChange={(e) => switchLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="de">german</option>
      </select>
    </div>
  );
};

export default Language;
