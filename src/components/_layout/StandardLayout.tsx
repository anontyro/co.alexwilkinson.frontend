import classnames from "classnames";
import MainFooter from "../Footer/MainFooter";
import NavBar from "../NavBar";
import styles from "./StandardLayout.module.scss";
import Image from "next/image";
import BgImage from "../../../public/assets/background.png";

interface Props {
  children: React.ReactNode;
  hasBackground?: boolean;
}

const StandardLayout: React.FC<Props> = ({ children, hasBackground }) => {
  return (
    <div
      className={classnames(
        styles.standardLayout,
        hasBackground ? styles.standardBackground : ""
      )}
    >
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
