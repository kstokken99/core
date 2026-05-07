import { useTranslation } from 'react-i18next'

import styles from './ErrorPage.module.scss'

export const ErrorPage = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.root}>
      <h1>{t('Something went wrong')}</h1>
      <p>{t('Try refreshing the page')}</p>
      <button onClick={() => window.location.reload()}>{t('Reload')}</button>
    </div>
  )
}
