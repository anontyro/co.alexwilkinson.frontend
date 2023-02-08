import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import BoxWithImage from "@/components/PageSections/BoxWithImage/BoxWithImage";
import MyPicture from "../../public/assets/my-picture.jpg";
import MyResumeInfo from "./components/MyResumeInfo/MyResumeInfo";
import WorkCard from "@/components/Cards/WorkCard/WorkCard";
import {
  useResumePageContentQuery,
  WorkExpItem,
} from "@/hooks/api/useResumePageContentQuery";
import { findDataByType, findDataString } from "@/utils/pageContentUtils";

import styles from "./Resume.module.scss";
import PositionCentre from "@/components/_layout/components/PositionCentre";
import PageLoader from "@/components/Loaders/PageLoader/PageLoader";

const ResumePage: React.FC = () => {
  const { data: pageContent, isLoading } = useResumePageContentQuery();
  return (
    <StandardLayout>
      {pageContent && !isLoading && (
        <>
          <BoxWithImage image={MyPicture} title={pageContent.header.title}>
            {{
              top: <MyResumeInfo />,
              body: <Text component="p">{pageContent.header.content}</Text>,
            }}
          </BoxWithImage>
          <Text capitalise component="h2" variant="heading2">
            {`Work Experience`}
          </Text>
          <div className={styles.workItemContainer}>
            {pageContent.workExperience.map((workExpItem) => (
              <WorkCard key={workExpItem.id} workExpItem={workExpItem} />
            ))}
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

export default ResumePage;
