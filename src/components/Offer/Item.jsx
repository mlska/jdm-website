import { motion } from 'framer-motion';

const Item = ({ icon, title, text }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-lightWhite font-sofia p-8 bg-stone-800 rounded-3xl"
      initial={{
        opacity: 0,
        x: -50
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1
        }
      }}
      viewport={{ once: true }}
    >
      <img src={icon} className="" />
      <h3 className="font-bold text-xl my-2">{title}</h3>
      <p className="text-stone-400">{text}</p>
    </motion.div>
  );
};

export default Item;
