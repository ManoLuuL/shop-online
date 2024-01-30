import { Swiper, SwiperSlide } from "swiper/react";

import { CardProduct } from "../../components";
import { CustomerReviews } from "./components";
import { PRODUCTS_DESTACT } from "./const";
import { Teste } from "../../assets";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../globals";

export const Home = () => {
  const navigate = useNavigate();
  const { showSuccess } = useToast();

  return (
    <div className={twMerge(" h-full")}>
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
                "inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-gray-800"
              )}
              href="/products"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex bg-blue-300">
        <div className="px-4 md:px-6 w-full text-center">
          <h2 className={twMerge("text-2xl font-semibold mb-6")}>
            Featured Products
          </h2>
          <Swiper slidesPerView={3} pagination={{ clickable: true }} navigation>
            {PRODUCTS_DESTACT.map((items) => (
              <SwiperSlide key={items.id}>
                <CardProduct
                  {...items}
                  isAnimated={false}
                  onClickViewMore={() => navigate("/products")}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center items-center">
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-[90%]">
              {ProductsCard}
            </div> */}
          </div>
        </div>
      </section>

      <CustomerReviews />

      <section className="p-6 bg-blue-300">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Entre em Contato</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form
                onSubmit={() => showSuccess("Formulario enviado com sucesso")}
              >
                <div className="mb-4">
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    className="mt-1 p-2 w-full border rounded-md"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Informações de Contato
                </h3>
                <p className="text-gray-600">
                  Estamos sempre disponíveis para ajudar. Entre em contato
                  conosco se tiver alguma dúvida.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Nosso Endereço</h3>
                <p className="text-gray-600">
                  Rua Exemplo, 123 <br />
                  Cidade, Estado <br />
                  CEP: 12345-678
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
