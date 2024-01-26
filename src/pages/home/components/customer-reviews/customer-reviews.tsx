import { CardReview } from "../../../../components";
import { REVIEWS } from "./const";

export const CustomerReviews = () => {
  const RenderReview = REVIEWS.map((items, index) => {
    return <CardReview {...items} key={`${items.author}-${index}`} />;
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-700">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {RenderReview}
        </div>
      </div>
    </section>
  );
};
