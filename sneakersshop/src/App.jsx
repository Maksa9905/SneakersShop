import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import { useState } from "react";
import "./App.css";
import Favorite from "./components/Favorite";

function App() {
  const products = [
    {
      productId: 0,
      name: "Sneakers1",
      price: 1200,
    },
    {
      productId: 1,
      name: "Sneakers2",
      price: 1400,
    },
    {
      productId: 2,
      name: "Sneakers3",
      price: 1500,
    },
    {
      productId: 3,
      name: "Sneakers4",
      price: 1600,
    },
  ];

  const [addedProducts, setAddedProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const onAddButtonClickHandler = (productId) => {
    setAddedProducts((prevAddedProducts) => {
      if (
        prevAddedProducts.find((addedProduct) => {
          return addedProduct.productId === productId;
        })
      ) {
        const newAddedProducts = [...prevAddedProducts].filter(
          (product) => product.productId !== productId
        );
        return newAddedProducts;
      }
      const newAddedProducts = [
        ...prevAddedProducts,
        { ...products[productId], count: 1 },
      ];
      return newAddedProducts;
    });
  };

  const onPlusButtonClickHandler = (productId) => {
    setAddedProducts((prevAddedProducts) => {
      const selectedProductIndex = prevAddedProducts.findIndex(
        (addedProduct) => {
          return addedProduct.productId === productId;
        }
      );

      const newSelectedProduct = {
        ...prevAddedProducts[selectedProductIndex],
        count: prevAddedProducts[selectedProductIndex].count + 1,
      };

      const newAddedProducts = [
        ...prevAddedProducts.slice(0, selectedProductIndex),
        newSelectedProduct,
        ...prevAddedProducts.slice(selectedProductIndex + 1),
      ];

      return newAddedProducts;
    });
  };

  const onMinusButtonClickHandler = (productId) => {
    setAddedProducts((prevAddedProducts) => {
      const selectedProductIndex = prevAddedProducts.findIndex(
        (addedProduct) => {
          return addedProduct.productId === productId;
        }
      );

      const selectedProduct = prevAddedProducts[selectedProductIndex];

      if (selectedProduct.count === 1) {
        const newAddedProducts = [
          ...prevAddedProducts.slice(0, selectedProductIndex),
          ...prevAddedProducts.slice(selectedProductIndex + 1),
        ];

        return newAddedProducts;
      } else {
        const newSelectedProduct = {
          ...prevAddedProducts[selectedProductIndex],
          count: prevAddedProducts[selectedProductIndex].count - 1,
        };

        const newAddedProducts = [
          ...prevAddedProducts.slice(0, selectedProductIndex),
          newSelectedProduct,
          ...prevAddedProducts.slice(selectedProductIndex + 1),
        ];

        return newAddedProducts;
      }
    });
  };

  const onDeleteButtonClickHandler = (productId) => {
    setAddedProducts((prevAddedProducts) => {
      const selectedProductIndex = prevAddedProducts.findIndex(
        (addedProduct) => {
          return addedProduct.productId === productId;
        }
      );

      const selectedProduct = prevAddedProducts[selectedProductIndex];

      const newAddedProducts = [
        ...prevAddedProducts.slice(0, selectedProductIndex),
        ...prevAddedProducts.slice(selectedProductIndex + 1),
      ];

      return newAddedProducts;
    });
  };

  const onFavoriteButtonClickHandler = (productId) => {
    setFavoriteProducts((prevFavoriteProducts) => {
      if (
        prevFavoriteProducts.find((favoriteProduct) => {
          return favoriteProduct.productId === productId;
        })
      ) {
        const newFavoriteProducts = [...prevFavoriteProducts].filter(
          (product) => product.productId !== productId
        );
        return newFavoriteProducts;
      }
      const newFavoriteProducts = [
        ...prevFavoriteProducts,
        { ...products[productId], count: 1 },
      ];
      return newFavoriteProducts;
    });
  };

  const onFavoriteDeleteButtonClickHandler = (productId) => {
    setFavoriteProducts((prevFavoriteProducts) => {
      const selectedProductIndex = prevFavoriteProducts.findIndex(
        (favoriteProduct) => {
          return favoriteProduct.productId === productId;
        }
      );

      const newFavoriteProducts = [
        ...prevFavoriteProducts.slice(0, selectedProductIndex),
        ...prevFavoriteProducts.slice(selectedProductIndex + 1),
      ];

      return newFavoriteProducts;
    });
  };

  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isFavoriteOpened, setIsFavoriteOpened] = useState(false);
  return (
    <>
      {isCartOpened && (
        <Cart
          addedProducts={addedProducts}
          favoriteProducts={favoriteProducts}
          onCloseCart={() => {
            setIsCartOpened(false);
          }}
          onPlusButtonClick={onPlusButtonClickHandler}
          onMinusButtonClick={onMinusButtonClickHandler}
          onDeleteButtonClick={onDeleteButtonClickHandler}
          onFavoriteButtonClick={onFavoriteButtonClickHandler}
        ></Cart>
      )}
      {isFavoriteOpened && (
        <Favorite
          favoriteProducts={favoriteProducts}
          onCloseFavorite={() => setIsFavoriteOpened(false)}
          onFavoriteDeleteButtonClick={onFavoriteDeleteButtonClickHandler}
        />
      )}
      <div className="mx-auto max-w-[1000px] w-[95%] p-[24px] rounded-xl bg-red">
        <Header
          addedProducts={addedProducts}
          onCartButtonClick={() => {
            setIsCartOpened(true);
          }}
          onFavoriteButtonClick={() => setIsFavoriteOpened(true)}
        ></Header>
        <hr className="my-[20px] text-neutral_01" />
        <Main
          onAddButtonClick={onAddButtonClickHandler}
          addedProducts={addedProducts}
          products={products}
          onOpenCart={isCartOpened}
        ></Main>
      </div>
    </>
  );
}

export default App;
