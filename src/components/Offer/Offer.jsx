import { forwardRef } from 'react';
import oil from '../../assets/oil_red.png';
import diagnotic from '../../assets/diagnostic.png';
import carEngine from '../../assets/car-engine.png';
import wires from '../../assets/broken-wire.png';
import suspension from '../../assets/suspension.png';
import brakes from '../../assets/disc-brake.png';
import Item from './Item';

const Offer = forwardRef((props, ref) => {
  const items = [
    {
      title: 'Wymiana oleju',
      icon: oil,
      text: 'Wymiana oleju w naszym warsztacie to szybki i skuteczny sposób na utrzymanie optymalnej wydajności i długowieczności silnika.'
    },
    {
      title: 'Diagnostyka',
      icon: diagnotic,
      text: 'Posiadamy najnowocześniejszy sprzęt do diagnostyki komputerowej, który umożliwia szybkie i precyzyjne wykrycie usterek sterowników.'
    },
    {
      title: 'Mechanika',
      icon: carEngine,
      text: 'Wykonujemy wszelkiego rodzaju naprawy mechaniczne, w tym układów silnikowych, zawieszenia, skrzyni biegów i wiele innych.'
    },
    {
      title: 'Elektryka',
      icon: wires,
      text: 'Specjalizujemy się w naprawach układów elektrycznych i elektronicznych, diagnozujemy i eliminujemy usterki związane z systemami elektrycznymi pojazdu.'
    },
    {
      title: 'Geometria zawieszenia',
      icon: suspension,
      text: 'Usługa geometrii zawieszenia w naszym warsztacie to kluczowy krok w dbaniu o komfort jazdy i bezpieczeństwo na drodze.'
    },
    {
      title: 'Układy hamulcowe',
      icon: brakes,
      text: 'Serwis układów hamulcowych w naszym warsztacie to gwarancja bezpieczeństwa i pewności podczas jazdy. Wymiana klocków, tarcz i innych elementów zapewni skuteczne hamowanie.'
    }
  ];

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center container mx-auto px-4 md:px-0"
    >
      <h2 className="text-primary font-sofia font-bold text-lg uppercase mb-1">
        Czym się zajmujemy?
      </h2>
      <h1 className="text-lightWhite font-sofia font-bold uppercase text-4xl">Nasza oferta</h1>
      <section className="grid 2xl:grid-cols-6 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-start w-full my-8 gap-8">
        {items.map((item, index) => (
          <Item key={index} title={item.title} icon={item.icon} text={item.text} />
        ))}
      </section>
    </div>
  );
});
Offer.displayName = 'Offer';
export default Offer;
