import classnames from "classnames";

import styles from "./Header.module.scss";

interface HeaderProps {
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "heading1" | "heading2" | "contentHeading" | "contentSubHeading";
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  children,
  variant = "none",
  component: Component,
}) => {
  return (
    <Component className={classnames(styles.base, styles[variant])}>
      {children}
    </Component>
  );
};

export default Header;
