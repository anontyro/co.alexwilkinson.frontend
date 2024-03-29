import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import BasePageSection from "../src/components/PageSections/BasePageSection";
import PositionCentre from "../src/components/_layout/components/PositionCentre";
import { useHomePageContentQuery } from "@/hooks/api/useHomePageContentQuery";
import PageLoader from "@/components/Loaders/PageLoader/PageLoader";

export default function Home() {
  const { data: pageContent, isLoading } = useHomePageContentQuery();
  return (
    <StandardLayout>
      <PositionCentre>
        {pageContent && !isLoading && (
          <BasePageSection>
            <Text component="h2" variant="heading1">
              {pageContent.title}
            </Text>
            <Text component="p" variant="heroBody">
              {pageContent.content}
            </Text>
          </BasePageSection>
        )}
        {isLoading && <PageLoader />}
      </PositionCentre>
    </StandardLayout>
  );
}
