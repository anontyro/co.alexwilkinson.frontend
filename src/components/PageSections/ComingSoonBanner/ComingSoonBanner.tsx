import PositionCentre from "@/components/_layout/components/PositionCentre";
import Text from "@/components/Text";

import styles from "./ComingSoonBanner.module.scss";

const ComingSoonBanner = () => (
  <PositionCentre>
    <div className={styles.comingSoonContainer}>
      <Text className={styles.comingSoon} component="h1">
        Coming soon...
      </Text>
      <Text className={styles.comingSoonInfo} component="p">
        This page is still under construction. Please check back later!
      </Text>
    </div>
  </PositionCentre>
);

export default ComingSoonBanner;
