import React from "react";
import styles from "./BaseCard.module.scss";

type Props = {
  children: {
    header?: React.ReactNode;
    body: React.ReactNode;
    footer?: React.ReactNode;
  };
};

const BaseCard: React.FC<Props> = ({ children }) => (
  <div className={styles.cardContainer}>
    {children.header && <div className={styles.header}>{children.header}</div>}
    <div className={styles.body}>{children.body}</div>
    {children.footer && <div className={styles.footer}>{children.footer}</div>}
  </div>
);

export default BaseCard;
