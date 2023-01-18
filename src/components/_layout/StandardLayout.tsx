import MainFooter from "../Footer/MainFooter";
import NavBar from "../NavBar";
import styles from "./StandardLayout.module.scss";
import Image from "next/image";
import BgImage from "../../../public/assets/background.png";

interface Props {
  children: React.ReactNode;
}

const StandardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.standardLayout}>
      <Image className={styles.backgroundImage} alt="" src={BgImage} />
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
