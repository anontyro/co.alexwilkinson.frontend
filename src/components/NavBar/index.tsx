import styles from "./NavBar.module.scss";
import Text from "../../components/Text";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.brandContainer}>
        <Text className={styles.navBarLogo} component="h1" variant="brand">
          Alex W
        </Text>
      </div>
      <nav className={styles.navBar}>
        <ol className={styles.mainNav}>
          <li>Blog</li>
          <li>Portfolio</li>
          <li>Resume</li>
          <li>About</li>
        </ol>
      </nav>
      <div className={styles.feedbackBtn}>
        <Text component="span">Feedback</Text>
      </div>
    </div>
  );
};

export default NavBar;
