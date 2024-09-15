const BoxComponent = ({ size, icon, iconName }) => {
  return (
    <div
      className={`h-36 w-full tablet:h-56 border-[2px] border-primary rounded-[10px] flex flex-col justify-center gap-5 items-center hover:bg-primary hover:text-secondary transition-all duration-75 hover:shadow-[0_0px_10px_0px_black]`}
    >
      {icon}
      <p className="text-lg font-semibold">{iconName}</p>
    </div>
  );
};

export default BoxComponent;
