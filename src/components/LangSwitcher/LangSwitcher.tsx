import { useTranslation } from "react-i18next";
import { LOCAL_STORAGE_LANG_KEY } from "@/constants";
import { cn } from "@/utils";

import styles from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n, t } = useTranslation();
  const langHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const defaultValue = localStorage.getItem(LOCAL_STORAGE_LANG_KEY) || "en";

  return (
    <select
      onChange={langHandler}
      className={cn(styles.root, className)}
      defaultValue={defaultValue}
    >
      <option value="en">{t("en")}</option>
      <option value="ru">{t("ru")}</option>
    </select>
  );
};
