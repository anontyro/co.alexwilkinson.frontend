import Image from "next/image";
import StandardLayout from "@/components/_layout/StandardLayout";
import ComingSoonBanner from "@/components/PageSections/ComingSoonBanner/ComingSoonBanner";
import { useRouter } from "next/router";
import { usePortfolioCaseStudContentQuery } from "@/hooks/api/usePortfolioCaseStudyContentQuery";
import { GhostPost } from "@/api/types/PostContent";
import Text from "@/components/Text";

import styles from "./Project.module.scss";
import PositionCentre from "@/components/_layout/components/PositionCentre";
import PageLoader from "@/components/Loaders/PageLoader/PageLoader";

type CaseStudyContainerProps = {
  project: GhostPost;
};

const CaseStudyContainer: React.FC<CaseStudyContainerProps> = ({ project }) => {
  return (
    <div>
      <div className={styles.blogHeader}>
        <Image
          priority
          placeholder="blur"
          blurDataURL="/assets/placeholder.png"
          src={project.feature_image}
          alt={project.feature_image_alt ?? project.title}
          width="1100"
          height="600"
        />
        <Text component="h2" variant="heading1">
          {project.title}
        </Text>
      </div>
      <div
        className={styles.blogPostContainer}
        dangerouslySetInnerHTML={{
          __html: project.html,
        }}
      />
    </div>
  );
};

const ProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const {
    data: project,
    isLoading,
    isError,
  } = usePortfolioCaseStudContentQuery(projectId as string);
  return (
    <StandardLayout>
      {isError && <ComingSoonBanner />}
      {project && !isLoading && !isError && (
        <CaseStudyContainer project={project[0]} />
      )}
      {!project && isLoading && (
        <PositionCentre>
          <PageLoader />
        </PositionCentre>
      )}
    </StandardLayout>
  );
};

export default ProjectPage;
