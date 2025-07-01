import styles from "./LoadingComponent.module.css";

const LoadingComponent = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingComponent;
