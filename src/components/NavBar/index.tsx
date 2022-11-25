import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.navBarLogo}>Alex Wilkinson</div>
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
