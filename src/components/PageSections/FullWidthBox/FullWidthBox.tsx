import styles from "./FullWidthBox.module.scss";
import Text from "@/components/Text";

type Props = {
  children: React.ReactNode;
  title: string;
};

const FullWidthBox: React.FC<Props> = ({ children, title }) => (
  <div className={styles.boxContainer}>
    <Text className={styles.boxHeader} component="h2" variant="heading1">
      {title}
    </Text>
    <div className={styles.boxContent}>{children}</div>
  </div>
);

export default FullWidthBox;
