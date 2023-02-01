import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import BoxWithImage from "@/components/PageSections/BoxWithImage/BoxWithImage";
import MyPicture from "../../public/assets/my-picture.jpg";
import MyResumeInfo from "./components/MyResumeInfo/MyResumeInfo";
import WorkCard from "@/components/Cards/WorkCard/WorkCard";
import { WorkExpItem } from "@/hooks/api/useResumePageContentQuery";

const PAGE_CONTENT = {
  TITLE: "my resume",
  CONTENT: `Hi I’m Alex I’ve been working in software development since 2016 working on a range of different projects across the stack. I have experience with c# and JavaScript on both the frontend and backend. I specialise in Frontend development currently favouring React`,
  SECTION_TITLE: "work experience",
};

const WORK_EXPERIENCE: WorkExpItem[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: {
      name: "Impala",
      url: "https://www.impala.travel/",
      location: "London, UK",
      description: "A travel tech company that worked in B2B room selling",
    },
    tags: [
      "React",
      "AWS",
      "TypeScript",
      "Node.js",
      "Next.Js",
      "Cypress",
      "Jest",
      "Postgres",
    ],
    dates: {
      start: "2022-09-10",
      end: null,
    },
    responsibilities: [
      "Developed and implemented a new frontend standard, significantly improving quality across the team and wider organisation",
      "Collaborated with colleagues to enhance their understanding of the frontend",
      "Delivered innovative features spanning multiple tiers of technology stack",
      "Established high coding standards through close work with manager",
    ],
  },
];

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
      <div>
        {WORK_EXPERIENCE.map((workExpItem) => (
          <WorkCard key={workExpItem.id} workExpItem={workExpItem} />
        ))}
      </div>
    </StandardLayout>
  );
};

export default ResumePage;
