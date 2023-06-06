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
      
      <main>
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
