import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";
import styles from "../styles/Home.module.scss";
import Header from "../src/components/Header";
import MainFooter from "../src/components/Footer/MainFooter";
import StandardLayout from "../src/components/_layout/StandardLayout";
import Text from "../src/components/Text";

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
      <Text component="h1" variant="heading1">
        {`Hi! I’m Alex and welcome to my site`}
      </Text>
      <Text component="p" variant="body">
        I’m a Frontend developer with full stack knowledge located in the United
        Kingdom I have experience with everything from Android development to
        SCSS. I specialise in TypeScript and have lots of experience with React
        and frontend experience overall working in a number of different
        industries in the UK and Singapore. I have backend knowledge with Node
        (Express and Nest) and C# (.Net Core) and work on AWS and Azure. I love
        learning new things and playing with new ideas to see some examples
        check my Portfolio or Github.
      </Text>
    </StandardLayout>
  );
}
