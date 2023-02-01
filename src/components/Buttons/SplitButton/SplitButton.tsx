import styles from "./SplitButton.module.scss";

type Props = {
  children: {
    left: React.ReactNode;
    right: React.ReactNode;
  };
};

const SplitButton: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.buttonLeft}>{children.left}</div>
      <div className={styles.buttonRight}>{children.right}</div>
    </div>
  );
};

export default SplitButton;
