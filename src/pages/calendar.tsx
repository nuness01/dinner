import type { NextPage } from "next";
import type { Day } from "@prisma/client";

import Calendar from "../components/Calendar";
import { prisma } from "src/server/db/client";
import { formatISO } from "date-fns";



interface HomeProps {
  days: Day[];
  closedDays: string[]; // as ISO string
}

const CalendarHome: NextPage<HomeProps> = ({ days, closedDays }) => {
  return (
    <>
      
      <main className="h-screen">
      <h1 className="py-24 text-center text-3xl font-bold text-gray-800 md:text-5xl ">Escolha o dia e a hora</h1>
        <Calendar days={days} closedDays={closedDays} />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const days = await prisma.day.findMany();
  const closedDays = (await prisma.closedDay.findMany()).map((d) =>
    formatISO(d.date)
  );
  return { props: { days, closedDays } };
}

export default CalendarHome;
