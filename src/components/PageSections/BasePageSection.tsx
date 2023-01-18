import styles from "./BasePageSection.module.scss";

interface Props {
  children: React.ReactNode;
}

const BasePageSection: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.textContainer}>{children}</div>
      <div className={styles.backgroundSqaure}>&nbsp;</div>
    </div>
  );
};

export default BasePageSection;
