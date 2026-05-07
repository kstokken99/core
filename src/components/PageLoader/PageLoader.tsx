import styles from './PageLoader.module.scss'

export const PageLoader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loader}></div>
    </div>
  )
}
