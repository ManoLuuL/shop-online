import { Card } from "../../components";
import { Link } from "react-router-dom";
import { PRODUCTS_DESTACT } from "./const";
import { twMerge } from "tailwind-merge";

export const Home = () => {
  const ProductsCard = PRODUCTS_DESTACT.map((items, index) => {
    return <Card {...items} key={`${items.title}-${index}`} />;
  });

  return (
    <div className={twMerge("bg-gray-400 h-screen")}>
      <section className={twMerge("px-20 py-10 mb-20 w-full")}>
        <div className={twMerge("flex justify-between items-center mt-10")}>
          <div>
            <h2 className={twMerge("text-3xl font-bold")}>
              Bem-Vindo ao Shop Online
            </h2>

            <div className={twMerge("flex space-x-4")}>
              <Link to={"/products"}>Veja nossos produtos</Link>
            </div>
          </div>
          <div className={twMerge("relative")}>
            <div
              className={twMerge(
                "bg-gray-600 rounded-full p-4 absolute -top-10 -right-10 w-40 h-40"
              )}
            />
            <div
              className={twMerge(
                "bg-gray-600 rounded-full p-4 absolute -bottom-10 -left-10 w-64 h-64"
              )}
            />
            <div
              className={twMerge(
                "relative flex shrink-0 overflow-hidden rounded-full w-64 h-64"
              )}
            >
              img
              {/* <img
                alt="Developer"
                className={twMerge("rounded-full aspect-square object-cover")}
                src={Teste}
              /> */}
            </div>
          </div>
        </div>
      </section>
      <section className={twMerge("px-20 py-10 mb-20 w-full bg-gray-600")}>
        <h1 className={twMerge("text-3xl my-3")}>Produtos em Destaque</h1>

        <div className="grid grid-cols-3 gap-4 mx-20 my-10">{ProductsCard}</div>
      </section>
      <section className={twMerge("px-20 py-10 mb-20 w-full")}>
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-4">Contatos</h2>
          <p>Email: info@meushop.com</p>
          <p>Telefone: (123) 456-7890</p>
          <p>Endereço: Rua da Loja, 1234</p>
        </div>
      </section>
    </div>
  );
};
