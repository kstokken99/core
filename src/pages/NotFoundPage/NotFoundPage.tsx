import { useTranslation } from 'react-i18next'

import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  const { t } = useTranslation()
  return <h1 className={styles.root}>{t('NotFoundPage')}</h1>
}
