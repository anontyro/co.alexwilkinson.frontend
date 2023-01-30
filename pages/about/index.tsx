import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";

const PAGE_CONTENT = {
  TITLE: "about me and my work",
  CONTENT: `This section will higlight more information about myself and the site
  as a whole.`,
};

const AboutPage: React.FC = () => {
  return (
    <StandardLayout>
      <FullWidthBox title={PAGE_CONTENT.TITLE}>
        <Text component="p">{PAGE_CONTENT.CONTENT}</Text>
      </FullWidthBox>
    </StandardLayout>
  );
};

export default AboutPage;
