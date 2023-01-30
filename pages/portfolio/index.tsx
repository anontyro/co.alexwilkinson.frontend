import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";
import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import InfoCard from "@/components/Cards/InfoCard/InfoCard";

const PAGE_CONTENT = {
  TITLE: "my portfolio",
  CONTENT: `This is a showcase of some of my projects I have worked on over
     the course of my career both professionally and personally. Check out my
     Github for more projects and code samples.`,
};

const PortfolioPage: React.FC = () => {
  return (
    <StandardLayout>
      <FullWidthBox title={PAGE_CONTENT.TITLE}>
        <Text component="p">{PAGE_CONTENT.CONTENT}</Text>
      </FullWidthBox>
      <InfoCard />
    </StandardLayout>
  );
};

export default PortfolioPage;
