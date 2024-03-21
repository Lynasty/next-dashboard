import { APIResponseCollection, APIResponseData } from "@/src/types/types";
import React from "react";
import Product from "./Product";

function ProductList({ products }: { products: APIResponseCollection<"api::product.product">}) {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      {products.data.map((product: APIResponseData<"api::product.product">) => {
        return <Product key={product.id} data={product} />
      })}
    </div>
  );
}

export default ProductList;
