export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-700">
      <p className="text-xs text-gray-300">
        © 2024 Shop Online. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </a>
      </nav>
    </footer>
  );
};
