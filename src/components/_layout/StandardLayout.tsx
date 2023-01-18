import MainFooter from "../Footer/MainFooter";
import NavBar from "../NavBar";
import styles from "./StandardLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

const StandardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.standardLayout}>
      <div>
        <NavBar />
      </div>
      <div className={styles.mainContent}>{children}</div>
      <div className={styles.mainFooter}>
        <MainFooter />
      </div>
    </div>
  );
};

export default StandardLayout;
