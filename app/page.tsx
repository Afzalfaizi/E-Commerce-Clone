import Cart from "@/components/Cart";
import Product from "@/components/Product";
import Image from "next/image";

const products: Product[] = [
  { id: "1", title: "Iphone 14Pro", price: 100, quantity: 1 },
  {
    id: "2",
    title: "Iphone 15Pro ",
    price: 200,
    quantity: 2,
  },
  {
    id: "3",
    title: "Iphone 16Pro",
    price: 300,
    quantity: 3,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex flex-col gap-8">
        <h1 className=" text-3xl">E-Commerce Cart System</h1>
        <div className=" grid grid-cols-3">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </main>
  );
}
