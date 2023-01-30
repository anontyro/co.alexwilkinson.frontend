import { APP_HOME, APP_ROUTES } from "@/consts/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import Text from "../../components/Text";
import HamburgerIcon from "../Icons/hamburger.svg";

import styles from "./NavBar.module.scss";

type ExternalLinkProps = {
  href: string;
  text: string;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, text }) => (
  <li>
    <a target="_blank" rel="noreferrer" href={href}>
      {text}
    </a>
  </li>
);

const MainNav: React.FC = () => {
  const router = useRouter();

  const mapRoutes = (): React.ReactNode[] => {
    const output: React.ReactNode[] = [];
    for (const route in APP_ROUTES) {
      const routeObj = APP_ROUTES[route];
      const isActive = router.asPath === routeObj.path;

      if (routeObj.isExternal) {
        output.push(
          <ExternalLink
            key={routeObj.path}
            href={routeObj.path}
            text={routeObj.text}
          />
        );
        continue;
      }

      output.push(
        <li key={routeObj.path} className={isActive ? styles.active : ""}>
          <Link href={routeObj.path}>{routeObj.text}</Link>
        </li>
      );
    }

    return output;
  };

  return (
    <nav className={styles.navBar}>
      <ol className={styles.mainNav}>{mapRoutes()}</ol>
    </nav>
  );
};

const NavBar: React.FC = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.brandContainer}>
        <Link href={APP_HOME}>
          <Text className={styles.navBarLogo} component="h1" variant="brand">
            Alex W
          </Text>
        </Link>
      </div>
      <div className={styles.hamburgerMenu}>
        <HamburgerIcon />
      </div>
      <MainNav />
      <div className={styles.feedbackBtn}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://forms.gle/SerQjoj3GaUTeVny6"
        >
          <Text component="span">Feedback</Text>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
