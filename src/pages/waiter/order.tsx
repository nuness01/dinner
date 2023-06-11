import Cart from "@components/Cart";
import MenuWaiter from "@components/MenuWaiter";
import Spinner from "@components/Spinner";

import { type FC, useState } from "react";

import { trpc } from "src/utils/trpc";
import { BsCart } from "react-icons/bs";

const MenuPage: FC = () => {
  const { isFetchedAfterMount } = trpc.menu.checkMenuStatus.useQuery(
    undefined,
    {
      onError: () => {
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

  return (
    <>
      <Cart
        removeFromCart={removeFromCart}
        open={showCart}
        setOpen={setShowCart}
        products={productsInCart}
      />
      {isFetchedAfterMount ? (
        <div className="mx-auto mt-12 max-w-7xl sm:px-6 lg:px-8">
          {/* Cart Icon */}
          <div className="flex w-full justify-end">
            <button
              type="button"
              onClick={() => setShowCart((prev) => !prev)}
              className="flex items-center justify-center rounded-lg bg-gray-200 p-3 text-lg font-medium text-indigo-600"
            >
              <BsCart className="mr-2 text-lg" />
              {productsInCart.reduce((acc, item) => acc + item.quantity, 0)}
            </button>
          </div>

          <MenuWaiter addToCart={addToCart} />
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
