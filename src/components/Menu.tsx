import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { type FC, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";
import { trpc } from "src/utils/trpc";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/router";

interface MenuProps {
  selectedTime: string;
  addToCart: (id: string, quantity: number) => void;
}

const Menu: FC<MenuProps> = ({ selectedTime, addToCart }) => {
  const router = useRouter()
  const { data: menuItems } = trpc.menu.getMenuItems.useQuery();
  const [filter, setFilter] = useState<undefined | string>("");

  const filterMenuItems = menuItems?.filter((menuItem) => {
    if (!filter) return true;
    return menuItem.includes(filter);
  });

  return (
    <div className="bg-white h-screen">
      
      <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24 lg:max-w-full">
      
        <div className="flex w-full justify-between">
        <h1 className="text-center text-3xl font-bold text-gray-800 md:text-5xl ">
                    Menu
                  </h1>
          <h2 className="flex items-center gap-4 text-2xl font-bold tracking-tight text-gray-900">
            <HiArrowLeft
              className="cursor-pointer"
              onClick={() => router.push("/")}
            />
            O nosso menu para o dia {format(parseISO(selectedTime), "do MMM, yyyy")}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filterMenuItems?.map((menuItem) => (
            <div key={menuItem.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 hover:opacity-75 lg:h-80">
                <div className="relative h-full w-full object-cover object-center lg:h-full lg:w-full">
                  <Image
                    src={menuItem.url}
                    alt={menuItem.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <p>{menuItem.name}</p>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  €{menuItem.price.toFixed(2)}
                </p>
              </div>

              <Button
                className="mt-4"
                onClick={() => {
                  addToCart(menuItem.id, 1);
                }}
              >
                Add to cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
