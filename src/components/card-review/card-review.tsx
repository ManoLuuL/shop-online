import { CardReviewProps } from "./types";
import { twMerge } from "tailwind-merge";

export const CardReview = (props: CardReviewProps) => {
  const { author, description } = props;

  return (
    <div
      className={twMerge(
        "rounded-lg border bg-card text-card-foreground shadow-sm"
      )}
    >
      <div className={twMerge("p-6")}>
        <p className={twMerge("text-sm text-gray-700")}>{description}</p>
        <p className={twMerge("text-sm font-bold mt-2 text-gray-700")}>
          - {author}
        </p>
      </div>
    </div>
  );
};
