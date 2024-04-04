import { motion } from 'framer-motion';

const HeroText = () => {
  const jdm = 'JDM';
  const service = 'SERVICE';
  const desc = 'SPECJALISTYCZNY SERWIS SAMOCHODÓW JAPOŃSKICH';

  const generateAnimatedText = (text, separator, baseDelay = 0) => {
    const t = text.split(separator);
    const animatedText = t.map((el, i) => (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: i / 10 + baseDelay / 2
        }}
        key={i}
      >
        {el}
        {`${separator}`}
      </motion.span>
    ));
    return animatedText;
  };

  return (
    <div className="text-center mx-auto my-36 w-full">
      <h1 className="text-lightWhite font-bruno font-bold text-4xl md:text-6xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_60%)]">
        <span className="font-bruno tracking-wider text-primary mr-4">
          {generateAnimatedText(jdm, '')}
        </span>
        {generateAnimatedText(service, '', 1)}
      </h1>
      <h2 className="text-stone-400 font-sofia text-lg md:text-2xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_60%)]">
        {generateAnimatedText(desc, ' ', 2)}
      </h2>
    </div>
  );
};

export default HeroText;
