import { type NextPage } from "next";
import Head from "next/head";
import Calendar from "../components/Calendar";

// import { trpc } from "~/utils/api";

interface HomeProps {
  days: Day[];
  closedDays: string[]; // as ISO string
}

const Home: NextPage<HomeProps> = ({ days, closedDays }) => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Calendar days={days} closedDays={closedDays} />
      </main>
    </>
  );
};

export default Home;