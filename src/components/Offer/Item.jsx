const Item = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center text-lightWhite font-sofia p-8 bg-stone-800 rounded-3xl">
      <img src={icon} className="" />
      <h3 className="font-bold text-xl my-2">{title}</h3>
      <p className="text-stone-400">{text}</p>
    </div>
  );
};

export default Item;
