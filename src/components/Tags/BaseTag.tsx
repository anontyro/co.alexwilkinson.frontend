import classnames from "classnames";

import styles from "./BaseTag.module.scss";

type Props = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const BaseTag: React.FC<Props> = ({ children, variant = "primary" }) => {
  return (
    <div className={classnames(styles.tag, styles[`tag-${variant}`])}>
      <span>{children}</span>
    </div>
  );
};

export default BaseTag;
