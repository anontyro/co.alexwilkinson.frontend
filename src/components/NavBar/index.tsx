import classnames from "classnames";
import { APP_HOME, APP_ROUTES } from "@/consts/routes";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";
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

const mapRoutes = (router: NextRouter): React.ReactNode[] => {
  const output: React.ReactNode[] = [];
  for (const route in APP_ROUTES) {
    const routeObj = APP_ROUTES[route];
    const isActive = router.asPath.includes(routeObj.path);

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

const MainNav: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.navBar}>
      <ol className={styles.mainNav}>{mapRoutes(router)}</ol>
    </nav>
  );
};

type MobileNavProps = {
  onClose: () => void;
  isOpen?: boolean;
};

const MobileNav: React.FC<MobileNavProps> = ({ onClose, isOpen }) => {
  const router = useRouter();
  const isMobileNavOpen = isOpen ? styles.mobileNavOpen : "";
  return (
    <nav className={classnames(styles.mobileNav, isMobileNavOpen)}>
      <ol className={classnames(styles.mobileNavList)}>{mapRoutes(router)}</ol>
      <div className={styles.closeContainer}>
        <a onClick={onClose} className={styles.close}></a>
      </div>
    </nav>
  );
};

const NavBar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <div className={styles.navBarContainer}>
      <Link href={APP_HOME} className={styles.brandContainer}>
        <Text className={styles.navBarLogo} component="h1" variant="brand">
          Alex W
        </Text>
      </Link>
      <div
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className={styles.hamburgerMenu}
      >
        <HamburgerIcon />
      </div>
      <MainNav />

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(!isMobileNavOpen)}
      />
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
