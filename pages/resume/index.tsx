import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import BoxWithImage from "@/components/PageSections/BoxWithImage/BoxWithImage";
import MyPicture from "../../public/assets/my-picture.jpg";
import MyResumeInfo from "./components/MyResumeInfo/MyResumeInfo";
import WorkCard from "@/components/Cards/WorkCard/WorkCard";
import {
  useResumePageContentQuery,
  WorkExpItem,
} from "@/hooks/api/useResumePageContentQuery";
import { findDataByType, findDataString } from "@/utils/pageContentUtils";

import styles from "./Resume.module.scss";
import PositionCentre from "@/components/_layout/components/PositionCentre";
import PageLoader from "@/components/Loaders/PageLoader/PageLoader";

//TODO: move this to the other branch
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
    meta: {
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
    },
    dates: {
      start: "2022-09-10",
      end: "2023-01-17",
    },
    responsibilities: [
      "Developed and implemented a new frontend standard, significantly improving quality across the team and wider organisation",
      "Collaborated with colleagues to enhance their understanding of the frontend",
      "Delivered innovative features spanning multiple tiers of technology stack",
      "Established high coding standards through close work with manager",
    ],
  },
  {
    id: "2",
    title: "Tech Lead",
    company: {
      name: "Chinsay",
      url: "https://www.chinsay.com/",
      location: "Singapore, Singapore",
      description: "Freight contracting digitisation in a SaaS model",
    },
    meta: {
      tags: [
        "SQL",
        "C#",
        "TypeScript",
        "Node.js",
        "Azure",
        "Jest",
        ".Net Core",
      ],
    },
    dates: {
      start: "2021-05-01",
      end: "2022-09-10",
    },
    responsibilities: [
      "Led experience team, enabling collaboration with product and design to break down requirements into manageable tasks",
      "Took ownership of frontend applications, continuously finding ways to modernise user interfaces",
      "Built features from concept to completion, providing guidance for junior members of the team",
      "Facilitated communication and cross-organisation collaboration",
    ],
  },
  {
    id: "3",
    title: "Full Stack Engineer",
    company: {
      name: "Chinsay",
      url: "https://www.chinsay.com/",
      location: "Singapore, Singapore",
      description: "Freight contracting digitisation in a SaaS model",
    },
    meta: {
      tags: [
        "SQL",
        "C#",
        "TypeScript",
        "Node.js",
        "Azure",
        "Jest",
        ".Net Core",
      ],
    },
    dates: {
      start: "2020-05-08",
      end: "2021-05-01",
    },
    responsibilities: [
      "Developed and implemented a new frontend standard, significantly improving quality across the team and wider organisation",
      "Collaborated with colleagues to enhance their understanding of the frontend",
      "Delivered innovative features spanning multiple tiers of technology stack",
      "Established high coding standards through close work with manager",
    ],
  },
  {
    id: "4",
    title: "Frontend Engineer",
    company: {
      name: "Hooq",
      url: null,
      location: "Singapore, Singapore",
      description: "The Netflix of South East Asia",
    },
    meta: {
      tags: ["React", "AWS", "TypeScript", "Node.js", "Jest", "Koa"],
    },
    dates: {
      start: "2018-10-15",
      end: "2020-05-08",
    },
    responsibilities: [
      "Developed maintainable, high quality Frontend code for the web app as part of a Scrum team",
      "Led the transition from JavaScript to TypeScript",
      "Upgraded the codebase to React 16.4+, introducing new Hooks and functional design principles",
      "Advanced testing practices and refactored components into reusable parts, boosting code quality",
    ],
  },
  {
    id: "5",
    title: "Software Engineer",
    company: {
      name: "Loi Hein Group",
      url: "https://www.loiheingroup.com/",
      location: "Singapore, Singapore",
      description: "Large Burmese fast moving consumer goods business",
    },
    meta: {
      tags: [
        "React",
        "C#",
        "TypeScript",
        "Node.js",
        "VueJs",
        "MySQL",
        ".Net Core",
        "ASP.NET",
      ],
    },
    dates: {
      start: "2017-05-10",
      end: "2018-09-20",
    },
    responsibilities: [
      "Developed and implemented a modern platform to streamline internal operations",
      "Collaborated with stakeholders to identify and resolve bottlenecks in the flow, leading to increased efficiency",
      "Incorporated cutting-edge technologies such as QR codes for improved logistics",
      "Established and expanded the engineering team of the organisation",
    ],
  },
  {
    id: "6",
    title: "Software Engineering Intern",
    company: {
      name: "Loi Hein Group",
      url: "https://www.loiheingroup.com/",
      location: "Singapore, Singapore",
      description: "Large Burmese fast moving consumer goods business",
    },
    meta: {
      tags: [
        "React",
        "C#",
        "TypeScript",
        "Node.js",
        "VueJs",
        "MySQL",
        ".Net Core",
        "ASP.NET",
      ],
    },
    dates: {
      start: "2016-10-10",
      end: "2017-05-10",
    },
    responsibilities: [
      "Enhanced security of platform by introducing two factor authentication method via mobile phone",
      "Developed web based time clock for employee attendance tracking",
    ],
  },
];

const ResumePage: React.FC = () => {
  const { data: pageContent, isLoading } = useResumePageContentQuery();
  return (
    <StandardLayout>
      {pageContent && !isLoading && (
        <>
          <BoxWithImage image={MyPicture} title={PAGE_CONTENT.TITLE}>
            {{
              top: <MyResumeInfo />,
              body: <Text component="p">{PAGE_CONTENT.CONTENT}</Text>,
            }}
          </BoxWithImage>
          <Text capitalise component="h2" variant="heading2">
            {PAGE_CONTENT.SECTION_TITLE}
          </Text>
          <div className={styles.workItemContainer}>
            {WORK_EXPERIENCE.map((workExpItem) => (
              <WorkCard key={workExpItem.id} workExpItem={workExpItem} />
            ))}
          </div>
        </>
      )}
      {isLoading && (
        <PositionCentre>
          <PageLoader />
        </PositionCentre>
      )}
    </StandardLayout>
  );
};

export default ResumePage;
