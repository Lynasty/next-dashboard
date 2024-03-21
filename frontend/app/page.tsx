import { fetchProducts } from "./_utils/strapiApi";
import { APIResponseCollection } from "@/src/types/types";
import ProductList from "./_components/ProductList";

export default async function Home() {

  const products = (await fetchProducts()) as APIResponseCollection<"api::product.product">;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <ProductList products={products} />
    </main>
  );
}