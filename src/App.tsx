import styles from "./App.module.scss";

console.log(styles);

export const App = () => {
  return (
    <div className={styles.root}>
      <h1>App</h1>
    </div>
  );
};
