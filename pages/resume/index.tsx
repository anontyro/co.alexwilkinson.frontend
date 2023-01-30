import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";
import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";

const PAGE_CONTENT = {
  TITLE: "my resume",
  CONTENT: `Hi I’m Alex, a TypeScript developer with special focus on the frontend with React SCSS and an interest in UX`,
};

const ResumePage: React.FC = () => {
  return (
    <StandardLayout>
      <FullWidthBox title={PAGE_CONTENT.TITLE}>
        <Text component="p">{PAGE_CONTENT.CONTENT}</Text>
      </FullWidthBox>
    </StandardLayout>
  );
};

export default ResumePage;
