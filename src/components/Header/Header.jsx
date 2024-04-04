import logo from '../../assets/logo_light.svg';
import video from '../../assets/Nissan_S14.mp4';
import DesktopMenu from './DesktopMenu';
import HeroText from './HeroText';
import Menu from './Menu';

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
    // <div className="h-screen bg-hero bg-no-repeat bg-cover bg-center [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
    <div className="h-svh [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]">
      <video
        src={video}
        loop
        autoPlay
        muted
        className="min-h-full w-full absolute object-cover z-[-1] outline-none"
        playsInline
      />
      <div className="flex justify-between">
        <img src={logo} className="h-20 md:h-24 ml-4" alt="Company logo" />
        <DesktopMenu scrollInto={scrollInto} buttons={buttons} />
        <Menu scrollInto={scrollInto} buttons={buttons} />
      </div>
      <HeroText />
    </div>
  );
};

export default Header;
