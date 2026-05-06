import { useTranslation } from 'react-i18next';
import { Select } from '@/components/ui';
import { LOCAL_STORAGE_LANG_KEY } from '@/constants';
import { cn } from '@/utils';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n, t } = useTranslation();
  const langHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };
  const defaultValue = localStorage.getItem(LOCAL_STORAGE_LANG_KEY) || 'en';
  const langOptions = [
    { value: 'en', label: t('en') },
    { value: 'ru', label: t('ru') },
  ];

  return (
    <Select
      className={cn(className)}
      onChange={langHandler}
      value={defaultValue}
      options={langOptions}
    />
  );
};
