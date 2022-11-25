import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";
import styles from "../styles/Home.module.scss";
import Header from "../src/components/Header";

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
    <div>
      <NavBar />
      <Header component="h1" variant="heading1">
        {`Hello I'm Alex a frontend developer with full stack experience`}
      </Header>
      <p>
        Located in Scotland I have experience with everything from Android
        development to SCSS. I started in a more backend role with Java and C#
        and spent two years working with React JS in media streaming. Now I am
        working in a more full stack capacity on a Microsoft Stack with a front
        end focus. In my freetime I enjoy playing with other technologies like
        Rust and Electron and learning new and better ways to write code.
      </p>
    </div>
  );
}
