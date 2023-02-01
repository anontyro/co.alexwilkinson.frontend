import Text from "@/components/Text";
import { AboutSectionItem } from "@/hooks/api/useAboutPageContentQuery";
import BaseCard from "../BaseCard";

import styles from "./AboutCard.module.scss";

type AboutCardHeaderProps = {
  title: string;
  subheading?: string;
};

const AboutCardHeader: React.FC<AboutCardHeaderProps> = ({
  title,
  subheading,
}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Text component="h2" variant="heading3">
          {title}
        </Text>
      </div>
      {subheading && (
        <div className={styles.subHeading}>
          <Text component="p" variant="body">
            {subheading}
          </Text>
        </div>
      )}
    </div>
  );
};

type AboutCardBodyProps = {
  body: string;
};

const AboutCardBody: React.FC<AboutCardBodyProps> = ({ body }) => {
  return (
    <div className={styles.body}>
      <Text component="p">{body}</Text>
    </div>
  );
};

type Props = {
  aboutItem: AboutSectionItem;
};

const AboutCard: React.FC<Props> = ({ aboutItem }) => {
  return (
    <BaseCard>
      {{
        header: (
          <AboutCardHeader
            title={aboutItem.title}
            subheading={aboutItem.subTitle}
          />
        ),
        body: <AboutCardBody body={aboutItem.body} />,
      }}
    </BaseCard>
  );
};

export default AboutCard;
