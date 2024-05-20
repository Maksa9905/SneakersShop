import productImage from "../assets/ProductCardCart_image.png";
import CardButton from "./CardButton";

export default function ProductCard({
  isAdded,
  name,
  productId,
  price,
  onClickCardButton,
}) {
  return (
    <div className="bg-neutral_01 w-[200px] aspect-square rounded-[12px] grid grid-cols-[auto_auto] grid-rows-[115px_auto_auto] px-[10px] pt-[8px] pb-[18px]">
      <div className="w-[180px] h-[115px] row-start-1 row-end-2 col-start-1 col-end-3">
        <img src={productImage} alt="product image" />
      </div>
      <p className="text-[12px] font-light row-start-2 row-end-3 col-start-1 col-end-3">
        {name}
      </p>
      <p className="text-[16px] flex items-center justify-left font-medium">
        {`${price}$`}
      </p>
      <CardButton
        productId={productId}
        isAdded={isAdded}
        onClickCardButton={(productId) => onClickCardButton(productId)}
      ></CardButton>
    </div>
  );
}
