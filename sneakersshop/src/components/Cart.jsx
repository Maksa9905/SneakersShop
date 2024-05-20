import CartProductCard from "./CartProductCard";

export default function Cart({
  onCloseCart,
  addedProducts,
  onPlusButtonClick,
  onMinusButtonClick,
  onDeleteButtonClick,
  onFavoriteButtonClick,
  favoriteProducts,
}) {
  const isEmpty = () => {
    return addedProducts.length === 0;
  };

  const calcSumm = () => {
    let summ = 0;
    addedProducts.forEach((addedProduct) => {
      summ += addedProduct.price * addedProduct.count;
    });
    console.log(summ);
    return summ;
  };

  console.log(addedProducts);
  return (
    <>
      <div
        onClick={() => onCloseCart()}
        className="w-screen z-0 h-screen fixed bg-modal_bg"
      ></div>
      <div className="flex justify-center">
        <div
          onClick={() => {}}
          className="mt-8 z-10 fixed rounded-[12px] px-[30px] py-[20px] w-[900px] min-h-[450px] bg-neutral_01"
        >
          <p className="text-[20px] font-bold">Cart:</p>
          {!isEmpty() &&
            addedProducts.map((addedProduct) => {
              return (
                <CartProductCard
                  isFavorite={
                    !!favoriteProducts.find((favoriteProduct) => {
                      return (
                        favoriteProduct.productId === addedProduct.productId
                      );
                    })
                  }
                  count={addedProduct.count}
                  key={addedProduct.productId}
                  name={addedProduct.name}
                  price={addedProduct.price}
                  productId={addedProduct.productId}
                  onPlusButtonClick={(productId) =>
                    onPlusButtonClick(productId)
                  }
                  onMinusButtonClick={(productId) =>
                    onMinusButtonClick(productId)
                  }
                  onDeleteButtonClick={(productId) =>
                    onDeleteButtonClick(productId)
                  }
                  onFavoriteButtonClick={(productId) =>
                    onFavoriteButtonClick(productId)
                  }
                ></CartProductCard>
              );
            })}
          {!isEmpty() && (
            <div className="text-[20px] font-medium">Totaly: {calcSumm()}$</div>
          )}
          {isEmpty() && (
            <div className="flex flex-col items-center h-[80%] justify-center">
              <div className="text-center text-[16px]">
                Your cart is empty...
              </div>
              <div className="bg-empty_box w-[48px] aspect-square"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
