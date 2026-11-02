// products/page.tsx (Server Component)


{/* <Suspense fallback={<div className="h-11 w-full md:max-w-md" />}>
  <ProductSearchBar />
</Suspense>

// Same page, reading the term server-side:
export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  // Pass q to your typed API client; matching on name and SKU happens in the backend.
} */}
import {ProductSearch} from "@/features/products/search/search-input";


export default function ProductsPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 py-8">
      <header className="mb-8">
        <h1 className="mb-4 text-2xl font-bold">
          Products
        </h1>

        <div className="max-w-md">
          <ProductSearch />
        </div>
      </header>

      {/* Products listing will go here */}
    </main>
  );
}