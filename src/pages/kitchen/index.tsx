import Link from "next/link";
import type { FC } from "react";

const kitchen: FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-8 font-medium">
      <Link className="rounded-md bg-gray-100 p-2" href="/kitchen/order">
        order
      </Link>
    </div>
  );
};

export default kitchen;
