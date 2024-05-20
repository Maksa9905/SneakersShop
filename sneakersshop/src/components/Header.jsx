import ReactSneakersIcon from "../assets/ReactSneakers_icon.svg";

export default function Header({
  onCartButtonClick,
  onFavoriteButtonClick,
  addedProducts,
}) {
  const calcSumm = () => {
    let summ = 0;
    addedProducts.forEach((addedProduct) => {
      summ += addedProduct.price * addedProduct.count;
    });
    console.log(summ);
    return summ;
  };

  return (
    <header className="flex flex-wrap md:justify-between gap-[15px] justify-center items-center">
      <div className="grid grid-rows-2 grid-cols-[56px_auto]">
        <img
          className="row-start-1 row-end-3 col-1"
          src={ReactSneakersIcon}
          alt="React Sneakers Icon"
        />
        <p className="text-xl uppercase font-bold text-neutral_01">
          react sneakers
        </p>
        <p className="text-xs text-neutral_01 font-light block">
          Лучшие реактивные кроссовки в России
        </p>
      </div>
      <div className="flex items-center gap-[10px]">
        <input
          className="w-[160px] md:w-[200px] h-[34px] py-[10px] pl-[16px] rounded-[12px] placeholder:text-[12px] placeholder:text-red placeholder:font-regular"
          type="text"
          placeholder="Поиск..."
          name="search"
          id="search"
        />
        <button
          onClick={() => onFavoriteButtonClick()}
          className="bg-favorite bg-cover w-[25px] aspect-square"
        ></button>
        <button
          onClick={() => onCartButtonClick()}
          className="bg-cart bg-cover w-[25px] aspect-square"
        ></button>
        <p className="text-[16px] font-bold text-neutral_01">{calcSumm()}$</p>
      </div>
    </header>
  );
}
