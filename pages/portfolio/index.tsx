import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";
import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import ProjectCard from "@/components/Cards/ProjectCard/ProjectCard";
import { usePortfolioPageContentQuery } from "@/hooks/api/usePortfolioPageContentQuery";
import PositionCentre from "@/components/_layout/components/PositionCentre";
import PageLoader from "@/components/Loaders/PageLoader/PageLoader";

import styles from "./Portfolio.module.scss";

const PortfolioPage: React.FC = () => {
  const { data: pageContent, isLoading } = usePortfolioPageContentQuery();
  return (
    <StandardLayout>
      {pageContent && !isLoading && (
        <>
          <FullWidthBox title={pageContent.header.title}>
            <Text component="p" variant="bigBody">
              {pageContent.header.content}
            </Text>
          </FullWidthBox>
          <div className={styles.myProjectsContainer}>
            {pageContent.myProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
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

export default PortfolioPage;
