import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";
import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import InfoCard from "@/components/Cards/ProjectCard/ProjectCard";
import { usePortfolioPageContentQuery } from "@/hooks/api/usePortfolioPageContentQuery";

import styles from "./Portfolio.module.scss";

const PortfolioPage: React.FC = () => {
  const { data: pageContent, isLoading } = usePortfolioPageContentQuery();
  console.log("pageContent", pageContent);
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
              <InfoCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </StandardLayout>
  );
};

export default PortfolioPage;
