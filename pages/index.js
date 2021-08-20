import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./../components/NavBar";

export default function Home() {
  return (
    <div className="container mx-auto border-2">
      <NavBar />
    </div>
  );
}