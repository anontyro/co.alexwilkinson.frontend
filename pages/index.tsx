import { useEffect, useState } from "react";
import StandardLayout from "../src/components/_layout/StandardLayout";
import Text from "../src/components/Text";
import BasePageSection from "../src/components/PageSections/BasePageSection";
import PositionCentre from "../src/components/_layout/components/PositionCentre";

const PAGE_CONTENT = {
  TITLE: "Hi! I’m Alex and welcome to my site",
  CONTENT: `
  I’m a Frontend developer with full stack knowledge located in the
            United Kingdom I have experience with everything from Android
            development to SCSS. I specialise in TypeScript and have lots of
            experience with React and frontend experience overall working in a
            number of different industries in the UK and Singapore. I have
            backend knowledge with Node (Express and Nest) and C# (.Net Core)
            and work on AWS and Azure. I love learning new things and playing
            with new ideas to see some examples check my Portfolio or Github.
  `,
};

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/movies");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <StandardLayout>
      <PositionCentre>
        <BasePageSection>
          <Text component="h2" variant="heading1">
            {PAGE_CONTENT.TITLE}
          </Text>
          <Text component="p" variant="heroBody">
            {PAGE_CONTENT.CONTENT}
          </Text>
        </BasePageSection>
      </PositionCentre>
    </StandardLayout>
  );
}
