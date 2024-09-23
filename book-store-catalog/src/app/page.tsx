import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { Merienda } from "next/font/google";
import BookDetails from "@/lib/models/BookDetails";

export const revalidate = 3600; // ISR: Revalidate every 1 hour for fresh data

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/books`, {
    cache: "no-store", // Prevent caching to always fetch fresh data
  });

  const allBooks = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-primary">
      <div
        className="z-10 w-full max-w-5xl items-center justify-around font-mono text-sm 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {allBooks.map((book: BookDetails) => (
          <ProductCard title={book.name} price={0} key={book._id} imageUrl={book.imageLink}></ProductCard>
        ))}
      </div>
    </main>
  );
}
