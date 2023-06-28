import Link from "next/link";


const dashboard = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-8 font-medium">
      <Link className="rounded-3xl hover:bg-blue-950 px-8 py-3 font-medium duration-75 border border-blue-950 hover:text-white" href="/dashboard/opening">
        Opening hours/days
      </Link>
      <Link className="rounded-3xl hover:bg-blue-950 px-8 py-3 font-medium duration-75 border border-blue-950 hover:text-white" href="/dashboard/menu">
        Menu
      </Link>
    </div>
  );
};

export default dashboard;
