import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";

import styles from "./About.module.scss";
import AboutCard from "@/components/Cards/AboutCard/AboutCard";
import { useAboutPageContentQuery } from "@/hooks/api/useAboutPageContentQuery";
import PositionCentre from "@/components/_layout/components/PositionCentre";
import PageLoader from "@/components/Loaders/PageLoader/PageLoader";

const AboutPage: React.FC = () => {
  const { data: pageContent, isLoading } = useAboutPageContentQuery();
  return (
    <StandardLayout>
      {pageContent && !isLoading && (
        <>
          <FullWidthBox title={pageContent.header.title}>
            <Text component="p">{pageContent.header.content}</Text>
          </FullWidthBox>
          <div className={styles.aboutSections}>
            <div>
              <Text capitalise component="h2" variant="heading2">
                {"My Values"}
              </Text>
              <div className={styles.sectionContainer}>
                {pageContent.myValues.map((content, i) => (
                  <AboutCard key={content.id} aboutItem={content} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {isLoading && (
        <PositionCentre>
          <PageLoader />
        </PositionCentre>
      )}
    </StandardLayout>
  );
};

export default AboutPage;
