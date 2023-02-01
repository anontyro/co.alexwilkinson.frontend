import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import BoxWithImage from "@/components/PageSections/BoxWithImage/BoxWithImage";
import MyPicture from "../../public/assets/my-picture.jpg";
import MyResumeInfo from "./components/MyResumeInfo/MyResumeInfo";

const PAGE_CONTENT = {
  TITLE: "my resume",
  CONTENT: `Hi I’m Alex I’ve been working in software development since 2016 working on a range of different projects across the stack. I have experience with c# and JavaScript on both the frontend and backend. I specialise in Frontend development currently favouring React`,
  SECTION_TITLE: "work experience",
};

const ResumePage: React.FC = () => {
  return (
    <StandardLayout>
      <BoxWithImage image={MyPicture} title={PAGE_CONTENT.TITLE}>
        {{
          top: <MyResumeInfo />,
          body: <Text component="p">{PAGE_CONTENT.CONTENT}</Text>,
        }}
      </BoxWithImage>
      <Text capitalise component="h2" variant="heading2">
        {PAGE_CONTENT.SECTION_TITLE}
      </Text>
    </StandardLayout>
  );
};

export default ResumePage;
