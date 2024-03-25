import { forwardRef } from 'react';

import gtr from '../../assets/gtr.jpg';
import nissan from '../../assets/nissan.svg';
import honda from '../../assets/honda.svg';
import infiniti from '../../assets/infiniti.svg';
import lexus from '../../assets/lexus.svg';
import mitsubishi from '../../assets/mitsubishi.svg';
import suzuki from '../../assets/suzuki.svg';
import mazda from '../../assets/mazda.svg';
import acura from '../../assets/acura.svg';

const About = forwardRef((props, ref) => {
  const manufacturers = [nissan, honda, infiniti, lexus, mitsubishi, suzuki, mazda, acura];
  return (
    <div ref={ref} className="px-4 my-8">
      <div className="container mx-auto mb-4 rounded-3xl bg-stone-800">
        <section className="table-cell w-1/2 p-8 md:p-12">
          <header>
            <h2 className="text-primary font-sofia font-bold text-2xl md:text-3xl uppercase mb-4">
              O nas
            </h2>
            <h1 className="text-lightWhite font-sofia font-bold uppercase text-3xl md:text-5xl">
              Mamy 25 lat doświadczenia
            </h1>
          </header>
          <img src={gtr} className="md:hidden rounded-xl my-4" />
          <article className="text-stone-400">
            Warsztat samochodowy JDM Service to miejsce, gdzie pasja do samochodów japońskich łączy
            się z profesjonalizmem i wysoką jakością usług. Nasz warsztat specjalizuje się w
            kompleksowym serwisowaniu oraz naprawach aut pochodzących z Japonii, oferując szeroki
            zakres usług dla klientów poszukujących rzetelnej opieki nad swoimi pojazdami. Nasza
            kadra to doświadczeni mechanicy, którzy posiadają specjalistyczną wiedzę oraz
            umiejętności w obsłudze samochodów japońskich marek takich jak Toyota, Honda, Nissan,
            Subaru, Mitsubishi, Mazda oraz innych. Dzięki temu możemy zapewnić kompleksowe wsparcie
            techniczne i naprawcze, zgodne z najwyższymi standardami producenta.
          </article>
        </section>
        <section className="hidden md:table-cell bg-gtr bg-center bg-cover [clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)] rounded-r-3xl"></section>
      </div>
      <div>
        <section className="container mx-auto rounded-3xl bg-stone-800 md:p-4">
          <div className="px-8 flex-wrap py-4 md:py-0 flex flex-row justify-between items-center">
            {manufacturers.map((manufacturer, index) => (
              <img key={index} src={manufacturer} className="w-16 lg:w-24" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
});
About.displayName = 'About';
export default About;
