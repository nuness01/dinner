import { Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { type FC, useState, useEffect } from "react";
import { trpc } from "src/utils/trpc";
import successImg from "../assets/knife-and-fork-2754149_1280.jpg";
import Image from "next/image";

const success: FC = ({}) => {
  const [products, setProducts] = useState<
    { id: string; quantity: number }[] | null | false
  >(null);

  // tRPC
  const { data: itemsInCart } = trpc.menu.getCartItems.useQuery(products || []);
  
  const total = (
    itemsInCart?.reduce(
      (acc, item) =>
        acc + item.price * itemsInCart.find((i) => i.id === item.id)!.quantity!,
      0
    ) ?? 0
  ).toFixed(2);

  useEffect(() => {
    const products = localStorage.getItem("products");
    if (!products) setProducts(false);
    else setProducts(JSON.parse(products));
  }, []);

  if (products === null)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner color="indigo" size={"xl"} />
      </div>
    );

  return (
    <main className="relative lg:min-h-full">
      <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          src={successImg}
          width="420"
          className={"h-full w-full object-cover object-center"}
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </div>

      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
          <div className="lg:col-start-2">
            <h1 className="text-sm font-medium text-indigo-600">
              Pagamento aceite
            </h1>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Obrigado pelo pedido!
            </p>
            <p className="mt-2 text-base text-gray-500">
              Agradecemos a sua encomenda, estamos atualmente a processá-la.
              Então fique firme e nós lhe enviaremos a confirmação muito em
              breve!
            </p>

            <dl className="mt-16 text-sm font-medium">
              <dt className="text-gray-900">Seu pedido</dt>
            </dl>

            <ul
              role="list"
              className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
            >
              {itemsInCart?.map((item) => {
                const thisItem = products.find(
                  (product: { id: string; }) => product.id === item.id
                );
                return (
                  <li key={item.id} className="flex space-x-6 py-6">
                    <Image
                      src={item.url}
                      width={500} 
                      height={500}
                      alt={item.name}
                      className="h-24 w-24 flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-gray-900">
                        <p>{item.name}</p>
                      </h3>
                    </div>
                    <div className="grid">
                    <p className="flex-none font-medium text-gray-900">
                      €{item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-500 ">Qty {thisItem?.quantity}</p></div>
                    
                  </li>
                );
              })}
            </ul>

            <dl className="space-y-6 pt-6 text-sm font-medium text-gray-500">
              <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
                <dt className="text-base">Total</dt>
                <dd className="text-base">€{total}</dd>
              </div>
            </dl>

            <div className="mt-16 border-t border-gray-200 py-6 text-right">
              <Link
                href="/menu"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default success;
