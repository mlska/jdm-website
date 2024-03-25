const Footer = () => {
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  return (
    <>
      <div className="flex h-16 justify-center items-center bg-primary text-lightWhite font-sofia font-bold">
        ©2024 JDM Service
      </div>
    </>
  );
};

export default Footer;
