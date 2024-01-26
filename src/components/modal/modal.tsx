import { ModalProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Modal = (props: ModalProps) => {
  const { children, onClose, title } = props;

  return (
    <>
      <div
        className={twMerge(
          "fixed inset-0 overflow-y-auto top-0 left-0",
          "z-50"
        )}
      >
        <div
          className={twMerge(
            "flex items-center justify-center",
            "min-h-screen"
          )}
        >
          <div className={twMerge("fixed inset-0 bg-gray-900 opacity-70")} />
          <div
            className={twMerge(
              "relative z-50 bg-gray-200 dark:bg-gray-800 p-4 max-w-lg w-full rounded-md"
            )}
          >
            <div className={twMerge("flex justify-between")}>
              <div className={twMerge("flex justify-start font-bold text-xl")}>
                {title}
              </div>
              <div className={twMerge("flex justify-end font-bold")}>
                <button
                  onClick={onClose}
                  className={twMerge(
                    "text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-400"
                  )}
                >
                  X
                </button>
              </div>
            </div>
            <div className={twMerge("mt-4")}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
