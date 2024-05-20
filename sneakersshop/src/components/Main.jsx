import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Main({ products, onAddButtonClick, addedProducts }) {
  return (
    <div className="">
      <div className="mx-auto justify-center inline-flex flex-wrap gap-[20px]">
        {products.map((product) => {
          return (
            <ProductCard
              isAdded={
                !!addedProducts.find((addedProduct) => {
                  return addedProduct.productId === product.productId;
                })
              }
              name={product.name}
              productId={product.productId}
              key={product.productId}
              price={product.price}
              onClickCardButton={() => onAddButtonClick(product.productId)}
            ></ProductCard>
          );
        })}
      </div>
    </div>
  );
}
