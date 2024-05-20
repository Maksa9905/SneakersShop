import ProductImage from "../assets/ProductCardCart_image.png";

export default function CartProductCard({
  name,
  productId,
  price,
  count,
  onPlusButtonClick,
  onMinusButtonClick,
  onDeleteButtonClick,
  onFavoriteButtonClick,
  isFavorite,
}) {
  return (
    <div className=" grid grid-cols-[200px_auto_auto] grid-rows-2">
      <div className="row-start-1 row-end-3">
        <img src={ProductImage} alt="Product Image" />
      </div>
      <p className="text-[16px] font-light">{name}</p>
      <p className="text-[16px] font-bold col-start-2 col-end-2">{price}$</p>
      <div className="flex pr-[15px] justify-self-end gap-[20px] items-baseline row-start-1 row-end-3 col-start-3">
        <div className="flex gap-[10px]">
          <button
            onClick={() => onFavoriteButtonClick(productId)}
            className={`${
              isFavorite ? "bg-cart_favorite_active" : "bg-cart_favorite"
            } bg-contain bg-no-repeat w-[20px] aspect-square`}
          ></button>
          <button
            onClick={() => onDeleteButtonClick(productId)}
            className="bg-cart_trash bg-contain bg-no-repeat w-[20px] aspect-square"
          ></button>
        </div>
        <div className="flex gap-[8px] items-center ">
          <button
            onClick={() => onMinusButtonClick(productId)}
            className="bg-minus bg-contain bg-no-repeat w-[20px] aspect-square"
          ></button>
          <p className="text-neutral_02 text-[20px]">{count}</p>
          <button
            onClick={() => onPlusButtonClick(productId)}
            className="bg-plus bg-contain bg-no-repeat w-[20px] aspect-square"
          ></button>
        </div>
      </div>
    </div>
  );
}
