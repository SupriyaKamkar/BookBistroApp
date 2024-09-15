import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { Merienda } from "next/font/google";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-primary">
      <div
        className="z-10 w-full max-w-5xl items-center justify-around font-mono text-sm 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </main>
  );
}
