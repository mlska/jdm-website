import { useState, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';

const Menu = ({ buttons, scrollInto }) => {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      'ul',
      {
        width: open ? 150 : 0,
        height: open ? 150 : 0,
        opacity: open ? 1 : 0
      },
      {
        type: 'spring',
        bounce: 0,
        duration: 0.4
      }
    );
    animate('li', open ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.3, x: -50 }, {
      duration: 0.2,
      delay: open ? staggerList : 0
    });
  }, [open]);

  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#fafafc"
      strokeLinecap="round"
      animate={open ? 'open' : 'closed'}
      transition={{ duration: 0.1 }}
      {...props}
    />
  );

  return (
    <div
      className="absolute cursor-pointer text-3xl top-6 right-8 text-lightWhite md:hidden"
      ref={scope}
    >
      <motion.button onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
        <svg width="28" height="28" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 9.423 L 20 9.423' },
              open: { d: 'M 0' }
            }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </svg>
      </motion.button>
      <ul className="absolute text-xl top-10 right-0 gap-2 opacity-0 bg-primary flex flex-col rounded-lg items-center">
        {buttons.map((item) => (
          <motion.li
            className="list-none m-0 py-2 w-full text-center"
            key={item.id}
            onClick={() => {
              scrollInto(item.id);
              setOpen(false);
            }}
          >
            {item.text}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
