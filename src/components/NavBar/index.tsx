import styles from "./NavBar.module.scss";
import Text from "../../components/Text";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBarContainer}>
      <Text className={styles.navBarLogo} component="h1" variant="brand">
        Alex W
      </Text>
      <ol className={styles.mainNav}>
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Resume</li>
        <li>About</li>
      </ol>
    </div>
  );
};

export default NavBar;
