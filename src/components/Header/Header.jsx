import logo from '../../assets/logo_light.svg';
import menu from '../../assets/more.png';

const Header = ({ scrollInto }) => {
  const buttons = [
    {
      id: 'about',
      text: 'O nas'
    },
    {
      id: 'offer',
      text: 'Oferta'
    },
    {
      id: 'contact',
      text: 'Kontakt'
    }
  ];

  return (
    <div className="h-[32rem] bg-hero bg-no-repeat bg-cover bg-center [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_95%)]">
      <div className="flex justify-between">
        <img src={logo} className="h-24 ml-4" alt="Company logo" />
        <div className="md:hidden">
          <img src={menu} className="w-full p-8" onClick={() => console.log(`test`)} />
        </div>
        <ul className="hidden md:flex md:gap-32 justify-around items-center mr-4">
          {buttons.map((section) => (
            <li
              key={section.id}
              className="text-lightWhite font-sofia text-xl self-center p-2 uppercase cursor-pointer after:border-b-4 after:border-primary after:transition-transform after:duration-400 after:ease-in-out after:scale-x-0 hover:after:scale-x-100 after:origin-left after:block [text-shadow:_1px_1px_1px_rgb(0_0_0_/_60%)]"
              onClick={() => {
                scrollInto(section.id);
              }}
            >
              {section.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mx-auto my-16">
        <h1 className="text-lightWhite font-bruno font-bold text-5xl md:text-6xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_60%)]">
          <span className="font-bruno tracking-wider text-primary">JDM</span> SERVICE
        </h1>
        <h2 className="text-stone-400 font-sofia text-xl md:text-2xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_60%)]">
          SPECJALISTYCZNY SERWIS SAMOCHODÓW JAPOŃSKICH
        </h2>
      </div>
    </div>
  );
};

export default Header;
