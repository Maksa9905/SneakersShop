import FavoriteProductCard from "./FavoriteProductCard";

export default function Favorite({
  onCloseFavorite,
  favoriteProducts,
  onFavoriteDeleteButtonClick,
}) {
  const isEmpty = () => {
    return favoriteProducts.length === 0;
  };
  return (
    <>
      <div
        onClick={() => onCloseFavorite()}
        className="w-screen z-0 h-screen fixed bg-modal_bg"
      ></div>
      <div className="flex justify-center">
        <div
          onClick={() => {}}
          className="mt-8 z-10 fixed rounded-[12px] px-[30px] py-[20px] w-[900px] min-h-[450px] bg-neutral_01"
        >
          <p className="text-[20px] font-bold">Favorite:</p>
          {!isEmpty() &&
            favoriteProducts.map((favoriteProduct) => {
              return (
                <FavoriteProductCard
                  key={favoriteProduct.productId}
                  name={favoriteProduct.name}
                  price={favoriteProduct.price}
                  productId={favoriteProduct.productId}
                  onFavoriteDeleteButtonClick={(productId) =>
                    onFavoriteDeleteButtonClick(productId)
                  }
                ></FavoriteProductCard>
              );
            })}
          {isEmpty() && (
            <div className="flex flex-col items-center h-[80%] justify-center">
              <div className="text-center text-[16px]">
                {"You have no favorite products("}
              </div>
              <div className="bg-empty_box w-[48px] aspect-square"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
