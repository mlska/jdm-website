const DesktopMenu = ({ buttons, scrollInto }) => {
  return (
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
  );
};

export default DesktopMenu;
