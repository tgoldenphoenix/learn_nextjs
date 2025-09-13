"use client";
import { usePathname } from "next/navigation";
// only client components can use hooks

// NotFound do not accept prop, must use usePathname hook
export default function NotFound() {
  const pathname = usePathname();
  // "/products/160/reviews/12"
  console.log('🐦‍🔥 ~ NotFound ~ pathname:', pathname) 

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  //   console.log({ pathname, productId, reviewId });

  return (
    <div>
      <h2>
        Review {reviewId} not found for product {productId}
      </h2>
    </div>
  );
}
