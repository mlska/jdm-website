import { useState, forwardRef } from 'react';
import phone from '../../assets/phone-call.png';
import email from '../../assets/email.png';
import marker from '../../assets/maps-and-flags.png';

const Contact = forwardRef((props, ref) => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted message:', message);
    setMessage('');
    setSubject('');
  };

  return (
    <div ref={ref} className="bg-dark">
      <div className="container mx-auto flex flex-col items-center text-lightWhite">
        <div className="text-center mt-4">
          <h2 className="text-primary font-sofia font-bold text-lg uppercase mb-1">
            Gdzie nas znaleźć?
          </h2>
          <h1 className="text-lightWhite font-sofia font-bold uppercase text-4xl">Kontakt</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <section className="flex flex-col items-center justify-center w-full md:w-1/2 font-sofia p-4 lg:p-16">
            <h1 className="text-4xl md:text-5xl font-bold uppercase">
              Umów swoją wizytę już dziś!
            </h1>
            <p className="text-stone-400">
              Umów swą wizytę już dziś i pozwól naszym pracownikom zająć się Twoim autem! Postaramy
              się jak najszybciej rozwiązać wszystkie problemy, abyś mógł bezpiecznie wrócić na
              drogę.
            </p>
            <div className="w-full mt-8">
              <iframe
                className="rounded-xl w-full h-80"
                src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=Wroc%C5%82aw%20Rynek+58(Wroc%C5%82aw)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          </section>

          <section className="w-full md:w-1/2 p-4 lg:p-16">
            <div className="max-w-md mx-auto flex flex-col">
              <div className="mb-2">
                <img src={marker} className="w-6 inline-block mr-2" />
                <span className="text-lg">Wrocław, Rynek 58</span>
              </div>
              <div className="mb-2">
                <img src={phone} className="w-6 inline-block mr-2" />
                <span className="text-lg">555 666 777</span>
              </div>
              <div>
                <img src={email} className="w-6 inline-block mr-2" />
                <span className="text-lg">serwis@jdm.pl</span>
              </div>
            </div>
            <div className="max-w-md mx-auto font-sofia">
              <form onSubmit={handleSubmit} className="rounded pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-lightWhite font-bold mb-2">
                    Temat:
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={subject}
                    onChange={handleSubjectChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-stone-950"
                    placeholder="Wpisz temat"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="description" className="block text-lightWhite font-bold mb-2">
                    Wiadomość:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleMessageChange}
                    className="rounded w-full py-2 px-3 text-stone-950 "
                    rows="4"
                    placeholder="Napisz swą wiadomość tutaj.."
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-primary hover:opacity-80 text-white font-bold py-2 px-8 rounded duration-300"
                  >
                    Wyślij
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});
Contact.displayName = 'Contact';
export default Contact;
