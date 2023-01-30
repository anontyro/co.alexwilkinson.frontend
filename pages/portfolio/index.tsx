import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";
import StandardLayout from "../../src/components/_layout/StandardLayout";
import Text from "@/components/Text";

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
    </StandardLayout>
  );
};

export default PortfolioPage;
