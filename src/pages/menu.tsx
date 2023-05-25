import Cart from "@components/Cart";
import Menu from "@components/Menu";
import Spinner from "@components/Spinner";
import { parseISO } from "date-fns";
import { useRouter } from "next/router";
import { type FC, useEffect, useState } from "react";
import { now } from "src/constants/config";
import { trpc } from "src/utils/trpc";
import { BsCart } from "react-icons/bs";

const MenuPage: FC = () => {
  const router = useRouter();

  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const { isFetchedAfterMount } = trpc.menu.checkMenuStatus.useQuery(
    undefined,
    {
      onError: () => {
        // Check for validity of selectedTime failed
        // Handle error accordingly (e.g. redirect to home page)
      },
    }
  );

  const [showCart, setShowCart] = useState<boolean>(false);
  const [productsInCart, setProductsInCart] = useState<
    { id: string; quantity: number }[]
  >([]);
  const addToCart = (id: string, quantity: number) => {
    setProductsInCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) => {
          if (item.id === id)
            return { ...item, quantity: item.quantity + quantity };
          return item;
        });
      }
      return [...prev, { id, quantity }];
    });
  };

  const removeFromCart = (id: string) => {
    setProductsInCart((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const selectedTime = localStorage.getItem("selectedTime");
    if (!selectedTime) router.push("/");
    else {
      const date = parseISO(selectedTime);
      if (date < now) router.push("/");

      // Date is valid
      setSelectedTime(selectedTime);
    }
  }, [router]);

  return (
    <>
      {isFetchedAfterMount && selectedTime ? (
        <div className="mx-auto mt-12 max-w-7xl sm:px-6 lg:px-8">
          {/* Cart Icon */}

          <button type="button" onClick={() => router.push("/")}>
            Back to time selection
          </button>

          <Menu selectedTime={selectedTime} />
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      )}
    </>
  );
};

export default MenuPage;
