import BaseButton from "../BaseButton";
import styles from "./PrimaryButton.module.scss";
import LinkIcon from "../../Icons/link.svg";

type Props = {
  text: string;
  onClick: () => void;
  icon?: "LinkIcon";
};

const PrimaryButton: React.FC<Props> = ({ text, onClick, icon }) => {
  return (
    <BaseButton onClick={onClick}>
      <div className={styles.button}>
        <div className={styles.text}>{text}</div>
        {icon && (
          <div className={styles.icon}>
            <LinkIcon className={styles.standardIcon} />
          </div>
        )}
      </div>
    </BaseButton>
  );
};

export default PrimaryButton;
