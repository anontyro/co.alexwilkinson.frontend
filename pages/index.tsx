import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";
import styles from "../styles/Home.module.scss";

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
    </div>
  );
}
