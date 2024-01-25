import { Card } from "../../components";
import { PRODUCTS_DESTACT } from "./const";
import { Teste } from "../../assets";
import { twMerge } from "tailwind-merge";

export const Home = () => {
  const ProductsCard = PRODUCTS_DESTACT.map((items, index) => {
    return <Card {...items} key={`${items.title}-${index}`} />;
  });

  return (
    <div className={twMerge("bg-gray-400 h-screen")}>
      <section
        className={twMerge("relative h-[500px] md:h-[600px] lg:h-[700px]")}
      >
        <img
          alt="Hero"
          className={twMerge("absolute inset-0 object-cover w-full h-full")}
          src={Teste}
        />
        <div
          className={twMerge(
            "relative h-full bg-black bg-opacity-50 flex items-center justify-center text-center"
          )}
        >
          <div className={twMerge("space-y-4")}>
            <h1
              className={twMerge(
                "text-2xl md:text-4xl lg:text-5xl text-white font-bold"
              )}
            >
              Welcome to Shop Online
            </h1>
            <p className={twMerge("text-lg md:text-xl lg:text-2xl text-white")}>
              Discover our exclusive collection of products.
            </p>
            <a
              className={twMerge(
                "inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800"
              )}
              href="/products"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="px-4 md:px-6 flex justify-center flex-col items-center">
          <h2 className={twMerge("text-2xl font-semibold mb-6")}>
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-[90%]">
            {ProductsCard}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-700">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
              data-v0-t="card"
            >
              <div className="p-6">
                <p className="text-sm text-gray-700">
                  "Great products and fast shipping. I'm very satisfied."
                </p>
                <p className="text-sm font-bold mt-2 text-gray-700">
                  - John Doe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={twMerge("p-6")}>
        <h2
          className={twMerge("text-2xl font-semibold mb-6 flex justify-center")}
        >
          Contact
        </h2>
        <div>bla bla bla</div>
      </section>
    </div>
  );
};
