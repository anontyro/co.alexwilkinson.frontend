import classnames from "classnames";

import styles from "./BaseCard.module.scss";

type Props = {
  padding?: "none" | "small" | "medium" | "large";
  children: {
    header?: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
  };
};

const BaseCard: React.FC<Props> = ({ children, padding = "small" }) => (
  <div
    className={classnames(styles.cardContainer, styles[`padding-${padding}`])}
  >
    {children.header && <div className={styles.header}>{children.header}</div>}
    <div className={styles.body}>{children.body}</div>
    {children.footer && <div className={styles.footer}>{children.footer}</div>}
  </div>
);

export default BaseCard;
