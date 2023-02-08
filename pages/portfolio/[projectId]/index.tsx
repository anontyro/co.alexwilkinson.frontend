import StandardLayout from "@/components/_layout/StandardLayout";
import ComingSoonBanner from "@/components/PageSections/ComingSoonBanner/ComingSoonBanner";
import { useRouter } from "next/router";
import { usePortfolioCaseStudContentQuery } from "@/hooks/api/usePortfolioCaseStudyContentQuery";

const ProjectPage = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const { data: project, isLoading } = usePortfolioCaseStudContentQuery(
    projectId as string
  );
  return (
    <StandardLayout>
      <ComingSoonBanner />
    </StandardLayout>
  );
};

export default ProjectPage;
