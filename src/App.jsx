import { useRef } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Offer from './components/Offer/Offer';
import Contact from './components/Contact/Contact';
import ScrollButton from './components/Buttons/ScrollButton';
function App() {
  const ref = {
    about: useRef(null),
    offer: useRef(null),
    contact: useRef(null)
  };

  const scrollInto = (section) => {
    const position = ref[section].current.offsetTop + window.scrollY;
    window.scroll({
      top: position,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <Header scrollInto={scrollInto} />
      <About ref={ref.about} />
      <Offer ref={ref.offer} />
      <Contact ref={ref.contact} />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
