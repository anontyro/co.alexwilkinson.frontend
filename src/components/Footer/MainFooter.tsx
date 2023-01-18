import Text from "../Text";
import SocialsBanner from "./SocialsBanner";

import styles from "./MainFooter.module.scss";

const currentYear = () => {
  return new Date().getFullYear();
};

const MainFooter: React.FC = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerSocialWrapper}>
        <SocialsBanner />
      </div>
      <div className={styles.footerCopy}>
        <Text variant="small" component="span">
          {`All rights reserved Alex Wilkinson ${currentYear()} ©`}
        </Text>
      </div>
    </footer>
  );
};

export default MainFooter;
