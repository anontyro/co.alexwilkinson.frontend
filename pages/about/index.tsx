import StandardLayout from "@/components/_layout/StandardLayout";
import Text from "@/components/Text";
import FullWidthBox from "@/components/PageSections/FullWidthBox/FullWidthBox";

import styles from "./About.module.scss";
import AboutCard from "@/components/Cards/AboutCard/AboutCard";

const PAGE_CONTENT = {
  title: "about me and my work",
  content: `Everyone has their own values and beliefs. I believe it is important to try and be aware of the areas you are passionate about and are important to you. Below is some of the values I hold close to my heart.`,
  SECTIONS: [
    {
      title: "my values",
      id: "1",
      contents: [
        {
          id: "12",
          title: "Work Culture",
          subTitle: "I believe in a culture of collaboration and learning",
          body: `I enjoy working with like minded smart passionate people. I always look for a culture that will allow me to thrive with more informal communication and a community feel that has mutual respect for one another and people are not afraid to be themselves. `,
        },
        {
          id: "13",
          title: "Growth and Development",
          subTitle: "Always pushing my boundaries ",
          body: `I don't believe in sitting still and need to always be pushing myself be it with new technologies, new skills or new experiences. I believe in learning from others and sharing my knowledge with others.`,
        },
        {
          id: "14",
          title: "Coding Excellence",
          subTitle: "Deliver fast, clean and maintainable code",
          body: `It is not enough to deliver a product that works, it needs to be maintainable and scalable. I believe in writing clean code that is easy to understand and maintain. I also believe in writing tests to ensure the code is working as expected.`,
        },
        {
          id: "15",
          title: "Don't be an observer",
          subTitle: "See something, say something",
          body: `I believe it is important to speak up and not be afraid to share your opinion. I believe in being open and honest and not being afraid to ask questions. I always hope to create a safe environment where people feel comfortable to share their thoughts and ideas.`,
        },
        {
          id: "16",
          title: "Lead by example",
          subTitle: "Be the change you want to see",
          body: `The only real way to lead is by example. I believe in being a good role model and always trying to do the right thing. It is important to work with others to achieve a common goal.`,
        },
        {
          id: "17",
          title: "Communication is key",
          subTitle: "You can't communicate too much",
          body: `The biggest issue I have seen in most businesses is lack of communication. Usually there is some level of misunderstanding or lack of clarity that can lead to tension and frustration. It is from this that I believe it is always important to communicate completely with others`,
        },
      ],
    },
  ],
};

const AboutPage: React.FC = () => {
  return (
    <StandardLayout>
      <FullWidthBox title={PAGE_CONTENT.title}>
        <Text component="p">{PAGE_CONTENT.content}</Text>
      </FullWidthBox>
      <div className={styles.aboutSections}>
        {PAGE_CONTENT.SECTIONS.map((section, i) => (
          <div key={section.id}>
            <Text capitalise component="h2" variant="heading2">
              {section.title}
            </Text>
            <div className={styles.sectionContainer}>
              {section.contents.map((content, i) => (
                <AboutCard key={content.id} aboutItem={content} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </StandardLayout>
  );
};

export default AboutPage;
