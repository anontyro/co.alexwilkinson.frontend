import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";
import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import InfoCard from "@/components/Cards/InfoCard/InfoCard";
import { usePortfolioPageContentQuery } from "@/hooks/api/usePortfolioPageContentQuery";

const PortfolioPage: React.FC = () => {
  const { data: pageContent, isLoading } = usePortfolioPageContentQuery();
  console.log("pageContent", pageContent);
  return (
    <StandardLayout>
      {pageContent && !isLoading && (
        <>
          <FullWidthBox title={pageContent.header.title}>
            <Text component="p">{pageContent.header.content}</Text>
          </FullWidthBox>
          <InfoCard />
        </>
      )}
    </StandardLayout>
  );
};

export default PortfolioPage;
