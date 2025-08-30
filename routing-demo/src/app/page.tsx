// This is the "root route" localhost:3000

import Link from "next/link";

// export a react funtional componen
export default function Home() {
  return (
    <>
      <h1>Welcome home, anhao!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
  );
}
