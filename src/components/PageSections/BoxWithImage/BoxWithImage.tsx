import classnames from "classnames";
import styles from "./BoxWithImage.module.scss";
import Text from "@/components/Text";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  children: {
    top?: React.ReactNode;
    body: React.ReactNode;
  };
};

const BoxWithImage: React.FC<Props> = ({ image, title, children }) => (
  <div className={styles.boxContainer}>
    <div className={styles.backgroundBox}></div>
    <div className={styles.boxImage}>
      <Image priority placeholder="blur" src={image} alt={title} />
    </div>
    <div
      className={classnames(
        styles.boxContent,
        children.top ? "" : styles.boxTopSpacer
      )}
    >
      {children.top && (
        <div className={styles.topContentContainer}>{children.top}</div>
      )}
      <Text className={styles.boxHeader} component="h2" variant="heading1">
        {title}
      </Text>
      {children.body}
    </div>
  </div>
);

export default BoxWithImage;
