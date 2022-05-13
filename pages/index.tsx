import type { NextPage } from "next";
import Head from "next/head";
import Title from "../components/Title";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Next Shop</Title>
        <p>todo text</p>
      </main>
    </>
  );
};

export default HomePage;
