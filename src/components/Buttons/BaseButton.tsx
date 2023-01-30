import classnames from "classnames";

import styles from "./BaseButton.module.scss";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const BaseButton: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={classnames(styles.button, className)}>
      {children}
    </button>
  );
};

export default BaseButton;
