import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import BoxWithImage from "@/components/PageSections/BoxWithImage/BoxWithImage";
import MyPicture from "../../public/assets/my-picture.jpg";
import GitHubIco from "@/components/Icons/github2.svg";
import GlobeIco from "@/components/Icons/globe.svg";

const PAGE_CONTENT = {
  TITLE: "my resume",
  CONTENT: `Hi I’m Alex I’ve been working in software development since 2016 working on a range of different projects across the stack. I have experience with c# and JavaScript on both the frontend and backend. I specialise in Frontend development currently favouring React`,
};

const TopContent: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <GitHubIco />
          /anontyro
        </div>
        <div>
          <button>Resume</button>
        </div>
      </div>
      <div>
        <GlobeIco />
        United Kingdom
      </div>
    </div>
  );
};

const ResumePage: React.FC = () => {
  return (
    <StandardLayout>
      <BoxWithImage image={MyPicture} title={PAGE_CONTENT.TITLE}>
        {{
          top: <TopContent />,
          body: <Text component="p">{PAGE_CONTENT.CONTENT}</Text>,
        }}
      </BoxWithImage>
    </StandardLayout>
  );
};

export default ResumePage;
