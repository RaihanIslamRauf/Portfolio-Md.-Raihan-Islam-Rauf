const Footer = () => {
  return (
    <footer className="bg-[#1A2526] text-gray-400 py-4 px-12 flex justify-between items-center text-sm select-none">
      <h3 className="text-white font-bold text-xl sm:text-2xl italic uppercase">
        RA<span className="text-red-500">U</span>F
      </h3>
      <p>
        &copy; {new Date().getFullYear()} Raihan Islam Rauf. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
